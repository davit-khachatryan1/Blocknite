const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    setupMiddlewares: (middlewares, devServer) => {
      // Custom middleware for onBeforeSetupMiddleware
      middlewares.unshift((req, res, next) => {
        // Custom middleware functionality
        next();
      });

      // Custom middleware for onAfterSetupMiddleware
      middlewares.push((req, res, next) => {
        // Custom middleware functionality
        next();
      });

      return middlewares;
    },
  },
};
