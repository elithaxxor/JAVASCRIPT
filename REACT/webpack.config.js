var webpack = require('webpack')
var path = require('path')
//  npm install -D babel-loader @babel/core @babel/preset-env webpack
// npm install --save-dev webpack           
module.exports = {
    entry:{
        app: './src/app.js'
    },
    output: {
        filename: 'public/build/bunlde.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module:{
        loaders:[
            {
            loaders: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }
        ]
    }
}
