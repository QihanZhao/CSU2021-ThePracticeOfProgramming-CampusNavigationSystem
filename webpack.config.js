const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: "production",
    performance: { hints: false},
    entry: {
        index:'./src/app.tsx'
    },
    output: {
        filename: 'main.js',
        path: path.resolve('./public/')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: {
                loader:'ts-loader'
            },
            exclude: /node_modules/
        },{
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
              },
            ],
          }]
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //   context: __dirname,
        //   manifest: require('./Resource/Vendor/Vendor_manifest.json'),
        // })
    ],
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    devServer: {
        port: 8080
    }
}