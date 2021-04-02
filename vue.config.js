module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  // 关闭自动检测warning
  lintOnSave: false,
  css: {
    loaderOptions: {
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        prependData: `@import "~@/styles/main.scss";`,
      },
    },
  },
};
