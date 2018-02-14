const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /(\.js$|\.ts(x?)$)/,
        exclude: /node_modules\/(?!@artsy\/reaction-force)/,
        // exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ]
      }
    ]
  }
}

