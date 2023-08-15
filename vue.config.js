const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

// const isProduction = process.env.NODE_ENV === "production";
// const isDevelopment = process.env.NODE_ENV === "development";

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "src",
  indexPath: "index.html",
  lintOnSave: process.env.NODE_ENV !== "production",
  css: {
    extract: true,
    sourceMap: true,
    // loaderOptions: {
    //   scss: {
    //     // "sass-loader"
    //   },
    // },
  },
  devServer: {
    host: "",
    port: "8180",
    // hotOnly: true,
    hot: true,
    open: true,
  },
  runtimeCompiler: true,
  parallel: require("os").cpus().length > 1,
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true,
  //   },
  // },
  chainWebpack: (config) => {
    // config.module.rule("vue").use("'vue-loader");
    // config.plugins.delete("html");
    // config.plugins.delete("preload");
    // config.plugins.delete("prefetch");
    // eslint-disable-next-line no-undef
    config.resolve.alias
      .set("vue$", path.resolve(__dirname, "node_modules/vue/dist/vue.esm.js"))
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@scss", resolve("src/assets/style"))
      .set("@components", resolve("src/components"))
      .set("@router", resolve("src/router"))
      .set("@plugins", resolve("src/plugins"))
      .set("@store", resolve("src/store"))
      .set("@views", resolve("src/views"));

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        // modify the options...
        return options;
      });
    // config.module.rule("images").set("parser", {
    //   dataUrlCondition: {
    //     maxSize: 4 * 1024,
    //   },
    // });
    const svgRule = config.module.rule("svg");
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    // config.plugin("html").tap((args) => {
    //   console.log(args);
    //   args[0].title = "vue template app";
    // });
    //   if (process.env.NODE_ENV === "production") {
    //     // mutate for production
    //   } else {
    //     // mutate for development
    //   }
  },
});
