const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.join(__dirname, "source", "index.tsx"),
  output: {
    path: path.join(__dirname, "docs"),
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
    hot: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.join(__dirname, "source")
    }
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: path.join(__dirname, "public", "favicon.svg")
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel")
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images"
          }
        }
      }
    ]
  }
};
