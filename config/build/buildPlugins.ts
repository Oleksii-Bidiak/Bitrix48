import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({
  html,
  isDev,
}: {
  html: string;
  isDev: boolean;
}): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    isDev && new HotModuleReplacementPlugin(),
  ].filter((plugin): plugin is WebpackPluginInstance => Boolean(plugin));

  return plugins;
}
