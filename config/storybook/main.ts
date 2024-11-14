import { BuildPaths } from './../build/types/config';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildResolvers } from '../build/buildResolvers';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: true,
    checkOptions: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal(config, options) {
    const paths: BuildPaths = {
      babelConfig: '',
      build: '',
      entry: '',
      html: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };
    const resolvers = config.resolve;

    config.module?.rules?.push(buildCssLoaders(true));
    config.resolve = { ...resolvers, ...buildResolvers(paths.src) };

    return config;
  },
};
export default config;
