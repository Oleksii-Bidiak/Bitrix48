import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export function buildCssLoaders(isDev: boolean, styles: string): RuleSetRule {
  return {
    test: /\.[s]?css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            namedExport: false,
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          additionalData: `
						@use "sass:math";
          	@import "_variables";
          	@import "_functions";
          `,
          sassOptions: {
            loadPaths: [styles],
          },
        },
      },
    ],
  };
}
