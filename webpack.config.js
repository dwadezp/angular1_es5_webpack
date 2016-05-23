var webpack = require('webpack');
module.exports = {
    entry: "./app/js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
};
