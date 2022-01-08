const path = require('path');
module.exports = {
    mode:"production",
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
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    devServer: {
        port: 8080
    }
}