const path = require("path");

module.exports = {
  entry: "./src/index.ts", // Entry point for your code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "LogifyFa", // Global variable name for the UMD build
    libraryTarget: "umd", // Universal Module Definition
    globalObject: "this", // Ensures compatibility with different environments
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve .ts and .js files
  },
  mode: "production", // Set to 'development' for easier debugging
};
