import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  modulePaths: ['<rootDir>src'],
  moduleDirectories: ['node_modules'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, '__mocks__/MockComponent.tsx'),
    '@/(.*)': '<rootDir>src/$1',
   //  '^@/index$': '<rootDir>config/jest/__mocks__/mockIndex.ts',
  },
};

export default config;
