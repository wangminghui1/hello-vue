const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
  }
module.exports = {
    publicPath: './',                  //根路径
    outputDir: 'dist',              //构建输出目录
    assetsDir: 'assets',            //静态资源目录
    lintOnSave: true,               //是否开启eslint保存检测，有效值：true, false, 'error'
    devServer: {                    //webpack-dev-server 相关配置
        open: true,                //启动完后是否自动打开浏览器
        host: 'localhost',          //主机地址
        port: 8080,                 //默认端口号
        https: false,               //地址是否为https
        hotOnly: false,             //热更新
        proxy: {                    //配置跨域请求
            '/api': {
                target: 'http://localhost:8888/api/',//接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: 'demo',
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
    runtimeCompiler: false,
    // vueLoader: {},
    productionSourceMap: true,      //生产环境是否生成 sourceMap 文件
    css: {                          //css相关配置
        extract: true,              //是否使用css分离插件 ExtractTextPlugin
        sourceMap: false,           //开启 CSS source maps
        loaderOptions: {},          //css预设器配置项
        modules: false              //启用CSS modules for all css/pre-processor files.
    },
    parallel: require('os').cpus().length > 1,
    // dll: false,                     //是否启用dll
    pwa: {},                        //PWA 插件相关配置
    pluginOptions: {               //第三方插件配置
        // ...
    }
}