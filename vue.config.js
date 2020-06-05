module.exports = {
  // 配置项目启动端口及自动打开浏览器
  devServer: {
    port: 3333,
    open: true
  },
  // 配置css全局变量
  css: {
    loaderOptions: {
      sass: {
        // 新版本
        prependData: `@import "@/assets/scss/_variable.scss";`
        // 旧版本
        // data: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
};
