const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 9000,
    publicPath: '/',
  },
  plugins: [new ErrorOverlayPlugin()],
};
