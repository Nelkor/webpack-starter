const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
  ],
}
