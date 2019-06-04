const path = require("path");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  context: __dirname,
  entry: "./frontend/screamless.jsx",
  output: {
    path: path.resolve(
      __dirname,
      "app",
      "assets",
      "javascripts",
      "manifest.json"
    ),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: /flexboxgrid/
      },
      {
        test: /\.json$/,
        exclude: /\/manifest.json$/,
        loader: "json"
      },
      {
        test: /\/manifest.json$/,
        loader: "file",
        query: {
          name: "manifest.json?[hash:8]"
        }
      }
    ]
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  plugins: [new ManifestPlugin()]
};
