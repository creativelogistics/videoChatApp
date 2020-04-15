const path = require('path');
const entryPoint = path.join(__dirname, '/client');
const output = path.join(__dirname, '/public');

// const CompressionPlugin = require('compression-webpack-plugin');

// const BrotliPlugin = require('brotli-webpack-plugin');
// add source dir and output dir variables
module.exports = {
  entry: `${entryPoint}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: output,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: entryPoint,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  
};
