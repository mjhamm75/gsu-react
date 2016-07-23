var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
              presets: ['react', 'es2015']
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ],

    postcss: function() {
        return [autoprefixer];
    }
};
