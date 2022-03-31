import { VueLoaderPlugin } from 'vue-loader'
// vue 跟 vue-template-compiler 的版本一定要一樣
import TerserPlugin from 'terser-webpack-plugin'

import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',

  entry: './src/index.js',
  // devtool: 'none',

  optimization: {
    usedExports: true,

    splitChunks: {
      // include all types of chunks
      // chunks: 'all'
      chunks: 'async',
      minSize: 30000,
      // minRemainingSize: 0, (Webpack 5 才有此選項)
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        }
      }
    },
    // runtimeChunk: true,
    minimize: true,
    minimizer: [new TerserPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

  plugins: [
    // 這個一定要放
    new VueLoaderPlugin()
  ],

  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
}
