const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
      { test: /\.css$/, use: ['style-loader', 'css-loader']}, // 打包处理 CSS 样式表的第三方loader
      { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 打包处理 字体文件 的loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json', 'vue'],
    alias: { // 表示别名
      '@': path.join(__dirname, './src'), // 这样，@ 就表示 项目根目录中 src 的这一层路径
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: "./index.html"
    })
  ]
};