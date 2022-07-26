/*
 * @Author: fg
 * @Date: 2022-07-26 11:06:10
 * @LastEditors: fg
 * @LastEditTime: 2022-07-26 14:02:57
 * @Description: webpack-config
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  // 默认输出
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      // 解析TypeScript
      {
        test: /\.(tsx?|jsx?)$/,
        use: 'ts-loader',
        exclude: /(node_modules|tests)/
      },
      // 解析css
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      // 解析less
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: (resourcePath) => {
                  if (/pure.css$/i.test(resourcePath)) {
                    return 'pure'
                  }
                  if (/global.css$/i.test(resourcePath)) {
                    return 'global'
                  }
                  return 'local'
                }
              }
            }
          },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', 'css'],
    // 设置别名
    alias: {
      utils: path.join(__dirname, 'src/utils/'),
      components: path.join(__dirname, 'src/components'),
      apis: path.join(__dirname, 'src/apis/'),
      hooks: path.join(__dirname, 'src/hooks'),
      store: path.join(__dirname, 'src/store')
    }
  },
  // 3000 端口打开网页
  devServer: {
    static: './dist',
    port: 3000,
    hot: true
  },
  // 指定模板
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
