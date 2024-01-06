[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/cosmopolitania/timeline)

# timeline

## insert twitter card - not tested due to lack of twitter account 
```bash
python3 insert_twitter_card.py
```

## Project setup via GitPod
```
open the following in Google Chrome
gitpod.io/#https://github.com/cosmopolitania/timeline
```

### Compiles and hot-reloads for development - Invalid Host header in GitPod, Need to be fixed.
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files - not tested yet
```
npm run lint
```

### Notifications  
All contents in src/images and src/components have been removed or substituted, since they look like the original authour's private contents.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vulnerabilities 対応
1. node のバージョンが新しすぎる場合. 
`node -v` で確認できる。このタイムラインJSでは、あるモジュールがnode 16, 17までしか対応していなかったのでとりあえず16に固定した
1. 同じモジュールがあちこちで使われ、バージョンが統一されていないことによるvulnerabilitiesが生じている場合
- 一時的な解決方法で問題が起きないか確認する. 
  - package-lock.jsonの直接編集
  - `rm -rf node_modules`　からの `npm install` からの`npm run serve` からの `npm run build` まで問題ないか確認
- 上記では再現性がないので、最初から編集結果になるよう package.json を編集する. 
  - そもそも問題となったモジュールが明示的にインストール指示されていないことが多い。その場合 `npm install <module>@<version>` を実行
  - "overrides":　のところで dedupeされ、意図したバージョンのみが使用されるよう記述する
  - `rm -rf node_module package-lock.json` からの `npm install` でクリーンインストール時の再現性が担保されたことを確認する
  - 各地での使用状況を確認するコマンドは `npm ls <module>`