const { resolve, join } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
    ],
  },

  node: {
    __dirname: false,
    __filename: false,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.tsx', '.ts', '.json'],
    alias: {
      '@app': join(__dirname, './src/renderer/app'),
      '@mixins': join(__dirname, './src/renderer/mixins'),
      '~': join(__dirname, './src'),
    },
  },

  externals: {
    'window-manager': 'require("window-manager")'
  }
};
