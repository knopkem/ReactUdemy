module.exports = {
    mode: 'development',
    entry: __dirname + '/src/app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/public/scripts'
    }
};
