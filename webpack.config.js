module.exports = {
  mode: process.env.MODE,
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|png|gif|jpg|jpeg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/other/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  externals: {
    createjs: 'createjs',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: `${__dirname}/public`,
    open: true,
    port: 8080,
  },
}
