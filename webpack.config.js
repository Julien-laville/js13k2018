const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./src/game.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'g.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ /* your config */ })
    ]
  }
}
