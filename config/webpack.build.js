const path = require('path');
const root = path.join(__dirname, '../');
const config = require(path.join(root, 'package.json'));
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    context: root, // to automatically find tsconfig.json
    entry: path.join(root, 'src/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: `${config.name}.min.js`,
        path: path.join(root, 'build'),
        libraryTarget: 'umd',
        library: config.name,
        umdNamedDefine: true
    }
};
