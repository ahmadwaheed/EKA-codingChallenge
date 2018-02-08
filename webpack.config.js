const path = require('path');

module.exports = {
  entry: './client/src/components/index.jsx', 
  output: {
    path: path.resolve(__dirname, './client/dist/'), 
    filename: 'bundle.js', 
    publicPath: '/'
  },
  module: {
    rules: [
      {  test: /\.jsx$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
          presets: ['react', 'es2015'],
        },
      }
    ]
  }
};