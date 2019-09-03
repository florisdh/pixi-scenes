const path = require('path');
const root = path.join(__dirname, '../');
const config = require(path.join(root, 'package.json'));

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
    externals: {
        'pixi.js': 'PIXI'
    },
    output: {
        filename: `${config.name}.min.js`,
        path: path.join(root, 'build'),
        libraryTarget: 'umd',
        library: ['PIXI', 'scenes'],
        umdNamedDefine: true
    }
};
