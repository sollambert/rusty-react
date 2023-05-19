const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js"
    },
    devServer: {
        compress: true,
        port: 8080,
        hot: true,
        static: [
            { directory: path.join(__dirname, "dist") },
            { directory: path.join(__dirname, "public") },
        ],
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico"
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, ".")
        }),
    ],
    mode: "development",
    devtool: "inline-source-map",
    experiments: {
        asyncWebAssembly: true
    }
};