# ESLint用設定

-   [@mitsue/eslint-config](../packages/eslint-config/)
-   @mitsue/eslint-config-es5（廃止）

## メンテナンス

### ESLintのリリース

2020年6月現在、ESLintは隔週金曜日（日本時間では土曜）にリリースされています。

原則として追加されたルールやオプションを有効にして新しいバージョンをリリースします。これは追加されているルールやオプションが[考え方](./README.md#考え方)と一致していることが多いためです。ただし、考え方を踏まえて有効にしない場合もあります。

### テスト

ルールやオプションを変更する場合はテストを追加します。2020年6月現在、以下をテストしています。

-   問題ないとしたコードにエラーや警告が報告されないか（*_ok.js）
-   問題あるとしたコードにエラーや警告が報告されるか（*_ng.js）

エラーや警告が報告される場合、以下がスナップショットと同じかどうか確認しています。

-   エラー（2）か警告（1）
-   ルールのID（eqeqeqなど）
-   発生箇所の行数

テストはESLint自体の変更によって失敗する可能性があります。

-   ルールの変更や削除
-   問題箇所として報告する行数や列数の変更（修正）
-   ESLintのAPIの変更

スナップショットを更新するには以下のコマンドを実行します。

```sh
npm run jest -u
```

## バージョン

[ESLintは未知のルールがあるとエラーを報告する](https://eslint.org/docs/user-guide/migrating-to-6.0.0#rule-configuration-are-validated-more-strictly)ため、このパッケージにルールを追加することは実質的にメジャーバージョンの更新を意味します。

### peerDependencies

[ESLintは未知のルールがあるとエラーを報告する](https://eslint.org/docs/user-guide/migrating-to-6.0.0#rule-configuration-are-validated-more-strictly)ため、このパッケージにルールを追加する場合はpeerDependenciesも更新します。
