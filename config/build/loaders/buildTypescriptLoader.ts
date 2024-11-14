import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildTypescriptLoader(isDev: boolean) {
  return {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: isDev ? [ReactRefreshTypeScript()] : [],
        }),
        transpileOnly: isDev,
      },
    },
    exclude: /node_modules/,
  };
}
