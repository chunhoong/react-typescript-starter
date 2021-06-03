const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, args) => {
  const isProduction = args.mode === "production";

  return {
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@component": path.resolve(__dirname, "src", "component"),
        "@dashboard": path.resolve(__dirname, "src", "dashboard"),
        "@accountDetail": path.resolve(__dirname, "src", "accountDetail")
      }
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.build.json"
          }
        },
        {
          test: /\.scss$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: "asset",
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
      })],

    devServer: {
      contentBase: path.join(__dirname, "build"),
      port: 9000,
      historyApiFallback: true
    },

    devtool: isProduction ? "source-map" : "eval-source-map",

    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
          }
        }
      }
    },

    performance: {
      hints: isProduction ? "warning" : false
    }
  }
}