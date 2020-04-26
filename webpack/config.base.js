const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
  ],
}
