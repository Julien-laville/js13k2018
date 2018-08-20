const path = require('path')

module.exports = {
  entry: ['./src/game.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'g.js'
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
