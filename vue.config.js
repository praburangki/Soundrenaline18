const path = require('path');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: []
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'dev/service-worker.js'
    }
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.configureWebpack.plugins.push(
    new HtmlCriticalWebpackPlugin({
      base: path.join(path.resolve(__dirname), 'dist'),
      css: path.join(path.resolve(__dirname), 'dev', 'critical.css'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      width: 1300,
      height: 900,
      penthouse: {
        blockJSRequests: false
      }
    })
  );
}
