module.exports = {
    devtool: "inline-source-map",
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath : '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'/*, 'eslint-loader'*/]
            }
        ]
    }
}