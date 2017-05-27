var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: 'moment'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunk: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({ 
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    })    
  ]
};

