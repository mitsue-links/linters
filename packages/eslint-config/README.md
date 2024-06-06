# @mitsue/eslint-config

[ESLint](https://eslint.org/)の基本設定ファイルです。

## インストール

```sh
npm i --save-dev eslint @mitsue/eslint-config
```

## 使用方法

.eslintrc.jsonに下記を追加してください。

```json
{
  "extends": [
    "@mitsue"
  ]
}
```

### ECMAScript Modulesを使う場合

.eslintrc.jsonを調整します。parserOptionsに`"sourceType": "module"`を記載します。

```json
{
  "extends": [
    "@mitsue"
  ],
  "parserOptions": {
    "sourceType": "module"
  }
}
```

### 改行コードがCR+LFの場合

.eslintrc.jsonを調整します。rulesのlinebreak-styleに`[2, "windows"]`を記載します。

```json
{
  "extends": [
    "@mitsue"
  ],
  "rules": {
    "linebreak-style": [2, "windows"]
  }
}
```

### Prettierと一緒に使う場合

[Prettierの公式ドキュメント](https://prettier.io/docs/en/integrating-with-linters.html)を参考にしてください。

必要なパッケージをインストールします。

```sh
npm i --save--dev eslint-config-prettier
```

.eslintrc.jsonを調整します。extendsの最後にprettierとprettier/prettierを記載します。

```json
{
  "extends": [
    "@mitsue",
    "prettier",
    "prettier/prettier"
  ]
}
```

## ESLintとの対応関係

|@mitsue/eslint-config|ESLint|
|-:|-:|
|6.0.0|>=8.53.0|
|5.0.0|8.52.0|
|4.1.0|>=7.30.0|
|4.0.1|^7.15.0|
|3.0.0|^7.4.0|
|2.0.0|^7.4.0|
|1.0.3|^7.1.0|

### ファイルが空でもエラーが報告される

ESLintは未知のルールが設定されているとエラーを報告します。

古いバージョンのESLintを利用していないか（このパッケージのpeerDependenciesに指定されているバージョンと合致しているかどうか）ご確認ください。

## 変更履歴

### 6.0.0

- 対象とするESLint（peerDependencies）を>=8.53.0に変更
- 非推奨になったスタイルの削除
    - [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
    - [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
    - [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
    - [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
    - [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
    - [block-spacing](https://eslint.org/docs/latest/rules/block-spacing)
    - [brace-style](https://eslint.org/docs/latest/rules/brace-style)
    - [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
    - [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
    - [comma-style](https://eslint.org/docs/latest/rules/comma-style)
    - [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
    - [dot-location](https://eslint.org/docs/latest/rules/dot-location)
    - [eol-last](https://eslint.org/docs/latest/rules/eol-last)
    - [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
    - [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
    - [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
    - [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
    - [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
    - [indent](https://eslint.org/docs/latest/rules/indent)
    - [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
    - [key-spacing](https://eslint.org/docs/latest/rules/key-spacing)
    - [keyword-spacing](https://eslint.org/docs/latest/rules/keyword-spacing)
    - [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
    - [lines-between-class-members](https://eslint.org/docs/latest/rules/lines-between-class-members)
    - [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
    - [max-len](https://eslint.org/docs/latest/rules/max-len)
    - [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
    - [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
    - [new-parens](https://eslint.org/docs/latest/rules/new-parens)
    - [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
    - [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
    - [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
    - [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
    - [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
    - [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
    - [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
    - [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
    - [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
    - [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
    - [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
    - [no-whitespace-before-property](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
    - [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
    - [object-curly-newline](https://eslint.org/docs/latest/rules/object-curly-newline)
    - [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
    - [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
    - [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
    - [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
    - [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
    - [padding-line-between-statements](https://eslint.org/docs/latest/rules/padding-line-between-statements)
    - [quote-props](https://eslint.org/docs/latest/rules/quote-props)
    - [quotes](https://eslint.org/docs/latest/rules/quotes)
    - [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
    - [semi](https://eslint.org/docs/latest/rules/semi)
    - [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
    - [semi-style](https://eslint.org/docs/latest/rules/semi-style)
    - [space-before-blocks](https://eslint.org/docs/latest/rules/space-before-blocks)
    - [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
    - [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
    - [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
    - [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
    - [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
    - [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
    - [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
    - [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
    - [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
    - [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
    - [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)


### 5.0.0

- parserOptionsのsourceTypeをmoduleに変更
    - 拡張子がcjsの場合はsourceTypeをscriptに設定
- 対象とするESLint（peerDependencies）を8.52.0に変更
- ルールに関する調整
    - [radix](https://eslint.org/docs/latest/rules/radix)を0（オフ）に設定
    - [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)を2（エラー）に設定
    - [prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)を2（エラー）に変更
    - [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)を2（エラー）に設定
    - [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)を0（オフ）に設定
    - [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)を2（エラー）に設定
    - [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)を2（エラー）に設定
    - [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)を2（エラー）に設定
- 非推奨になったルールの削除
    - [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
    - [no-new-object](https://eslint.org/docs/rules/no-new-object)
- テスト環境をNode.js v20に変更

### 4.1.0

- 対象とするESLint（peerDependencies）を>=7.30.0に変更
    - ESLint 8への対応
- parserOptionsのecmaVersionをlatestに変更

### 4.0.1

- ES2015以降のグローバルオブジェクトが無効になっていた問題を修正

### 4.0.0

- 対象とするESLint（peerDependencies）を^7.15.0に変更
- parserOptionsのecmaVersionを2021に変更
- 以下のenvを無効化
    - commonjs
- ルールに関する調整
    - [no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)を2（エラー）に設定
    - [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)を2（エラー）に設定

### 3.0.0

- 以下のenvを無効化
    - shared-node-browser
- ルールに関する調整
    - [linebreak-style](https://eslint.org/docs/rules/linebreak-style)をunixに設定

### 2.0.0

- 対象とするESLint（peerDependencies）を^7.4.0に変更
- parserOptionsのecmaVersionを2020に変更
- 以下のenvを有効化
    - es2020
- ルールに関する調整
    - [prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)を2（エラー）に設定
    - [require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)を2（エラー）に設定
    - [no-prototype-builtins](https://eslint.org/docs/rules/)を2（エラー）に設定
    - [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)の調整（constとletの直後の空行を必須ではなく任意に設定）
    - [comma-dangle](https://eslint.org/docs/rules/comma-dangle)をalways-multilineに設定
    - [no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)を2（エラー）に設定
    - [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)を1（警告）に設定

### 1.0.3

- 対象とするESLint（peerDependencies）を^7.1.0に変更
- ルールに関する調整
    - [use-isnan](https://eslint.org/docs/rules/use-isnan)のenforceForIndexOfをtrueに設定
    - [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)のenforceForOrderingRelationsをtrueに設定
    - [grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)を2（エラー）に設定
    - [no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)を2（エラー）に設定
    - [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)を2（エラー）に設定
    - [no-setter-return](https://eslint.org/docs/rules/no-setter-return)を2（エラー）に設定
    - [default-case-last](https://eslint.org/docs/rules/default-case-last)を2（エラー）に設定
    - [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)を2（エラー）に設定
    - [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)を2（エラー）に設定
    - [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)のgetWithoutSetをfalseに設定
    - [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)を2（エラー）に設定
    - Node.js & CommonJSに関するルールを削除
    - [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)を1（警告）に設定
- 以下のメソッドにエラーを報告するように調整
    - trimLeft()
    - trimRight()

### 1.0.2

- 以下の設定とルールを追加
    - [reportUnusedDisableDirectives](https://eslint.org/docs/user-guide/configuring#report-unused-eslint-disable-comments)をtrueに設定
    - [no-import-assign](https://eslint.org/docs/rules/no-import-assign)を2に設定
    - [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)を2に設定
    - [default-param-last](https://eslint.org/docs/rules/default-param-last)を2に設定
- 以下のオプションを追加
    - [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)、[computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)のenforceForClassMembersオプションをtrueに設定
    - [use-isnan](https://eslint.org/docs/rules/use-isnan)のenforceForSwitchCaseオプションをtrueに設定

### 1.0.1

- 以下のenvを無効化
    - amd
    - mocha
    - jasmine
    - jest
    - phantomjs
    - protractor
    - qunit
- 以下のメソッドにエラーを報告するように調整
    - escape()
    - unescape()
    - substr()
    - getYear()
    - setYear()
    - toGMTString()
- [function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)をmultilineに設定

### 1.0.0

- 最初のリリース

## License

MIT © [Mitsue-Links Co.,Ltd.](https://www.mitsue.co.jp/)
