const path = require('path')

module.exports = {
  entry: ['./game.js'],
  output: {
    path: path.join(__dirname),
    filename: 'dist.js'
  }, module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {"modules": false}]
          ]
        }
      }
    }]
  }
}
