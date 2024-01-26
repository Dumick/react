import webpack from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = () => {

    const config: webpack.Configuration = {
        mode: "development",
        entry: '/src/index.tsx',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {test: /\.(ts|js)x?$/, use: 'ts-loader'},
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            clean: true,
            publicPath: '/',
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'public/index.html')
            })
        ]
    }

    return config;
}