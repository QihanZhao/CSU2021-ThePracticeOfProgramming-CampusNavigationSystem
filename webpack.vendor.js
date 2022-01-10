var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: {
    Vendor: [
      'react',
      'react-dom',
      '@antv/l7',
      '@antv/g6'
    ],
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'Resource/Vendor'),
    publicPath: '/Resource/Vendor',
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_dll',  // 要跟 output.library 保持一致
      path: path.join(__dirname, 'Resource/Vendor' + '/[name]_manifest.json'),
    })
  ]
}