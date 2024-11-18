import { RuleSetRule } from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { BuildPaths } from './types/config';

export function buildLoaders(isDev: boolean, paths: BuildPaths): RuleSetRule[] {
  const { babelConfig, styles } = paths;
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const cssLoaders = buildCssLoaders(isDev, styles);

  const babelLoader = buildBabelLoader(babelConfig);

  const typescriptLoader = buildTypescriptLoader(isDev);

  return [cssLoaders, svgLoader, fileLoader, babelLoader, typescriptLoader];
}
