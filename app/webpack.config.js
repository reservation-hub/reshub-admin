const HTMLWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: './src/index.tsx',
  modules: {
    rules:[{
      test: /\.(ts|tsx)?$/,
      use:'ts-loader',
      exclude: /node_modules/
    }, {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}