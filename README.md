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
PROJECT=square  mix start
```

上記を実行すると

* 対象スプレッドシートから必要なマスタデータを回収
* CSV への出力
* JSON 形式への整形 までをやります。ローカルで動作確認して、問題なさそうならそのままコミットしちゃいましょう。
* PROJECT は square か queens が指定可能
