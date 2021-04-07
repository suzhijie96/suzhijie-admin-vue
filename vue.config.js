module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  // 关闭自动检测warning
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "~@/styles/main.less";`,
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            "primary-color": "#455ff7",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
