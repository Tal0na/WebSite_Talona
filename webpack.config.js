const path = require('path');

module.exports = {
  // other webpack configuration options...

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', 
            },
          },
        ],
      },
    ],
  },
};