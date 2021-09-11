# elixirika-masterdata
elixirika のゲームで使うマスターデータの CSV と JSON 管理をするリポジトリだよ

## 準備

* git コマンドが実行可能な環境を用意
* schema.yml の編集(詳細はTODO)
* .env.example 参考に .env に GOOGLE_SPREADSHEET_ID を設定
  * direnv で .env が読み込まれる環境想定です。単に `GOOGLE_SPREADSHEET_ID=xxxxx mix start` とかでもOK

## 実行

```
mix compile
mix start
```

上記を実行すると

* 対象スプレッドシートから必要なマスタデータを回収
* CSV への出力
* JSON 形式への整形(クライアントサイドで変換なしにそのまま取り扱える想定)
* `masterdata_yymmddhhmmss` ブランチにまとめてコミットしてpush

ここまでやります。
ブラウザで差分を確認し、差分が意図どおりであればそのままgithub上でマージしちゃい、このリポジトリから適当にデータを拾ってきて利用しましょう。
