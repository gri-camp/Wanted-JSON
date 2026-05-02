import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import FileManagerPlugin from "filemanager-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
const isDev = process.env.NODE_ENV === "development";
const target = isDev ? "web" : "browserslist";
const mode = isDev ? "development" : "production";

const BabelConfigObject = (preset) => {
  return {
    loader: "babel-loader",
    options: {
      presets: preset ? ["@babel/preset-env", preset] : ["@babel/preset-env"],
    },
  };
};


function Mimimiser() {
  return mode === "production"
    ? [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ]
    : [];
}

export default {
  target,
  mode,
  entry: {
    main: ["@babel/polyfill", path.resolve("src") + "/main.js"],
    docs: ["@babel/polyfill", path.resolve("src") + "/docs.js"],
    customers: ["@babel/polyfill", path.resolve("src") + "/customers.js"],
    references: ["@babel/polyfill", path.resolve("src") + "/references.js"],
    quiz: ["@babel/polyfill", path.resolve("src") + "/quiz.js"],
    fakeAuth: ["@babel/polyfill", path.resolve("src") + "/fakeAuth.js"],
    profile: ["@babel/polyfill", path.resolve("src") + "/profile.js"],
    signup: ["@babel/polyfill", path.resolve("src") + "/signup.js"],   
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  "postcss-preset-env": { browsers: "last 2 version" },
                },
              },
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      // {
      //   test: /\.json$/,
      //   type: "json",
      //   use: "json-loader",
      //   generator: {
      //     filename: "json/[name][ext]",
      //   },
      // },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: BabelConfigObject(),
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: BabelConfigObject("@babel/preset-typescript"),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "icons/[name][ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(path.resolve(), "src"),
    },
    compress: true,
    port: 3013,
    allowedHosts: "all",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/docs.html",
      filename: "docs.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["docs"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/customers.html",
      filename: "customers.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["customers"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/references.html",
      filename: "references.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["references"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/quiz.html",
      filename: "quiz.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["quiz"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/fakeAuth.html",
      filename: "fakeAuth.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["fakeAuth"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/signup.html",
      filename: "signup.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["signup"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/profile.html",
      filename: "profile.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["profile"],
    }),    
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.resolve("src") + "/json",
              destination: path.resolve("dist") + "/json",
            },
          ],
          // mkdir: ["/path/to/directory/", "/another/directory/"],
        },
      },
    }),
  ],
  optimization: {
    minimizer: Mimimiser(),
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".tsx", ".ts"],
  },
};
