const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const babelPlugins = [];
const config = {
  cache: true,
  entry: {
    'bundle': `./test/index.js`
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20480
          }
        },
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  );
  babelPlugins.push("transform-remove-strict-mode");
  babelPlugins.push("babel-plugin-transform-dead-code-elimination");

} else {
  config.devtool = "inline-source-map";
}

module.exports = config;