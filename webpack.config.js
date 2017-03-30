const path = require('path')

module.exports = {
  entry: './All.js',
  output: {
    filename: 'All.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'bsp-utils': path.resolve(__dirname, 'node_modules/bsp-utils/bsp-utils.js'),
      jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js')
    }
  }
}
