export function buildBabelLoader(babelConfig: string) {
  return {
    test: /\.(js|ts,jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      // options: {
      //   configFile: babelConfig,
      // },
    },
  };
}
