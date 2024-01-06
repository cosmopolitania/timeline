// module.exports = {
//   transpileDependencies: [
//     'vuetify'
//   ]
// }
module.exports = {
  "outputDir": "docs",
  "assetsDir": "./",
  "publicPath": "./",
  "transpileDependencies": [
    "vuetify"
  ],
  
  pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: "timeline",
      template: 'public/index.html'
    }
  },
  // Invalid Host Headerエラー対応
  // https://thebaker.hatenablog.com/entry/2018/10/09/153411
  // さらにwepback v5 での対応 for gitpod を重ねる
  // https://github.com/gitpod-io/gitpod/issues/11170
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws'
      }
  }
}
