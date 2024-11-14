import { RuleSetRule } from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders(isDev: boolean, babelConfig:string): RuleSetRule[] {
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

  const cssLoaders = buildCssLoaders(isDev);

  const babelLoader = buildBabelLoader(babelConfig);

  const typescriptLoader = buildTypescriptLoader(isDev);

  return [cssLoaders, svgLoader, fileLoader, babelLoader, typescriptLoader];
}
