const webpack = require('webpack')
const path = require('path')
const {
  ANGULAR_VERSION,
  UI_ROUTER_VERSION,
  NG_ROUTER_VERSION,
  NODE_ENV
} = process.env

exports.entry = {
  'flat': './src/flat/index.js',
  'multipleFlat': './src/multipleFlat/index.js',
  'enterprise': './src/enterprise/index.js'
}

exports.output = {
  publicPath: '/',
  path: `./dist/${ANGULAR_VERSION}`,
  filename: '[name].bundle.js'
}

exports.resolve = {
  alias: {
    'enterprise': path.resolve(__dirname, '..', 'src', 'enterprise'),
    'flat': path.resolve(__dirname, '..', 'src', 'flat'),
    'multipleFlat': path.resolve(__dirname, '..', 'src', 'multipleFlat'),
    'angular': path.resolve(__dirname, '..', 'vendor', 'angular'),
    'ng-route': path.resolve(__dirname, '..', 'vendor', 'angular-route'),
    'ui-router': path.resolve(__dirname, '..', 'vendor', 'ui-router')
  }
}

exports.module = {
  rules: [
    { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    { test: /\.json$/, loader: 'json-loader' },
    { test: /\.html$/, loader: 'raw-loader' },
    { test: /angular\/[\.\d]+\.js$/, loader: 'exports-loader?angular' }
  ]
}

exports.provide = () => new webpack.ProvidePlugin({
  'angular': path.resolve(__dirname, '..', 'vendor', 'angular', ANGULAR_VERSION + '.js')
}),

exports.ugly = () => new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  comments: false,
  compress: { warnings: false, drop_console: true },
  output: { comments: false }
})

exports.define = () => new webpack.DefinePlugin({
  'process.env': { 
    NODE_ENV: JSON.stringify(NODE_ENV),
    ANGULAR_VERSION: JSON.stringify(ANGULAR_VERSION),
    UI_ROUTER_VERSION: JSON.stringify(UI_ROUTER_VERSION),
    NG_ROUTER_VERSION: JSON.stringify(NG_ROUTER_VERSION),
  }
})