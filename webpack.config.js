var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'demo.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
      ]
  }
};
