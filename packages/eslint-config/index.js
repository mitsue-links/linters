module.exports = {
    /*
     * see also:
     * https://eslint.org/docs/user-guide/configuring
     */
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        node: true,
        commonjs: false,
        'shared-node-browser': false,
        es6: true,
        es2017: true,
        es2020: true,
        worker: true,
        amd: false,
        mocha: false,
        jasmine: false,
        jest: false,
        phantomjs: false,
        protractor: false,
        qunit: false,
        jquery: false,
        prototypejs: false,
        shelljs: false,
        meteor: false,
        mongo: false,
        applescript: false,
        nashorn: false,
        serviceworker: true,
        atomtest: false,
        embertest: false,
        webextensions: false,
        greasemonkey: false,
    },
    reportUnusedDisableDirectives: true,
    /*
     * see also:
     * http://eslint.org/docs/rules/
     */
    rules: {
        /*
         * --------------------------------------------------------------------
         * Possible Errors
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/for-direction
        'for-direction': 2,

        // https://eslint.org/docs/rules/getter-return
        'getter-return': 2,

        // https://eslint.org/docs/rules/no-async-promise-executor
        'no-async-promise-executor': 2,

        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 2,

        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 2,

        // https://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': 2,

        // https://eslint.org/docs/rules/no-console
        'no-console': 1,

        // https://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 2,

        // https://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 1,

        // https://eslint.org/docs/rules/no-debugger
        'no-debugger': 1,

        // https://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 2,

        // https://eslint.org/docs/rules/
        'no-dupe-else-if': 2,

        // https://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 2,

        // https://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 2,

        // https://eslint.org/docs/rules/no-empty
        'no-empty': 2,

        // https://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 2,

        // https://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 2,

        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 2,

        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': [2, 'functions'],

        // https://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 2,

        // https://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 2,

        // https://eslint.org/docs/rules/no-import-assign
        'no-import-assign': 2,

        // https://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': 2,

        // https://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 2,

        // https://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': 2,

        // https://eslint.org/docs/rules/no-loss-of-precision
        'no-loss-of-precision': 1,

        // https://eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 2,

        // https://eslint.org/docs/rules/no-obj-calls
        'no-obj-calls': 2,

        // https://eslint.org/docs/rules/no-promise-executor-return
        'no-promise-executor-return': 2,

        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 2,

        // https://eslint.org/docs/rules/no-regex-spaces
        'no-regex-spaces': 2,

        // https://eslint.org/docs/rules/no-setter-return
        'no-setter-return': 2,

        // https://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 2,

        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 2,

        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 2,

        // https://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 2,

        // https://eslint.org/docs/rules/no-unreachable-loop
        'no-unreachable-loop': 1,

        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 2,

        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': [2, {
            enforceForOrderingRelations: true,
        }],

        // https://eslint.org/docs/rules/no-useless-backreference
        'no-useless-backreference': 2,

        // https://eslint.org/docs/rules/require-atomic-updates
        'require-atomic-updates': 2,

        // https://eslint.org/docs/rules/use-isnan
        'use-isnan': [2, {
            enforceForSwitchCase: true,
            enforceForIndexOf: true,
        }],

        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': 2,

        /*
         * --------------------------------------------------------------------
         * Best Practices
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/accessor-pairs
        'accessor-pairs': [2, {
            setWithoutGet: true,
            getWithoutSet: false,
            enforceForClassMembers: true,
        }],

        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 2,

        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 2,

        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': 1,

        // https://eslint.org/docs/rules/complexity
        complexity: 0,

        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 2,

        // https://eslint.org/docs/rules/curly
        curly: [2, 'all'],

        // https://eslint.org/docs/rules/default-case
        'default-case': 2,

        // https://eslint.org/docs/rules/default-case-last
        'default-case-last': 2,

        // https://eslint.org/docs/rules/default-param-last
        'default-param-last': 2,

        // https://eslint.org/docs/rules/dot-location
        'dot-location': [2, 'object'],

        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': [2, {
            allowKeywords: true, // ECMAScript 3 互換は明示的になしとする
        }],

        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: 2,

        // https://eslint.org/docs/rules/grouped-accessor-pairs
        'grouped-accessor-pairs': 2,

        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 2,

        // https://eslint.org/docs/rules/max-classes-per-file
        'max-classes-per-file': 0,

        // https://eslint.org/docs/rules/no-alert
        'no-alert': 1,

        // https://eslint.org/docs/rules/no-caller
        'no-caller': 2,

        // https://eslint.org/docs/rules/no-case-declarations
        'no-case-declarations': 2,

        // https://eslint.org/docs/rules/
        'no-constructor-return': 2,

        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 2,

        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': 2,

        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': 2,

        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 2,

        // https://eslint.org/docs/rules/no-eq-null
        'no-eq-null': 2,

        // https://eslint.org/docs/rules/no-eval
        'no-eval': 2,

        // https://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 2,

        // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 2,

        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 2,

        // https://eslint.org/docs/rules/no-fallthrough
        'no-fallthrough': 2,

        // https://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 2,

        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': 2,

        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': 1,

        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 1,

        // https://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 2,

        // https://eslint.org/docs/rules/no-invalid-this
        'no-invalid-this': 0, // DOMのイベントハンドラーなどを考慮して無効

        // https://eslint.org/docs/rules/no-iterator
        'no-iterator': 2,

        // https://eslint.org/docs/rules/no-labels
        'no-labels': [2, {
            allowLoop: true,
        }],

        // https://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 2,

        // https://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 2,

        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': 0,

        // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 2,

        // https://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 2,

        // https://eslint.org/docs/rules/no-new
        'no-new': 2,

        // https://eslint.org/docs/rules/no-new-func
        'no-new-func': 2,

        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 2,

        // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
        'no-nonoctal-decimal-escape': 2,

        // https://eslint.org/docs/rules/no-octal
        'no-octal': 2,

        // https://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 2,

        // https://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': 2,

        // https://eslint.org/docs/rules/no-proto
        'no-proto': 2,

        // https://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 2,

        // https://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': [2, {
            property: 'substr',
            message: 'Please use `String.prototype.substring`',
        }, {
            property: 'getYear',
            message: 'Please use `Date.prototype.getFullYear`',
        }, {
            property: 'setYear',
            message: 'Please use `Date.prototype.setFullYear`',
        }, {
            property: 'toGMTString',
            message: 'Please use `Date.prototype.toUTCString`',
        }, {
            property: 'trimLeft',
            message: 'Please use `String.prototype.trimStart`',
        }, {
            property: 'trimRight',
            message: 'Please use `String.prototype.trimEnd`',
        }],

        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': 2,

        // https://eslint.org/docs/rules/no-return-await
        'no-return-await': 2,

        // https://eslint.org/docs/rules/no-script-url
        'no-script-url': 2,

        // https://eslint.org/docs/rules/no-self-assign
        'no-self-assign': [2, {
            props: true,
        }],

        // https://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 2,

        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 2,

        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 2,

        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 2,

        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': 2,

        // https://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 2,

        // https://eslint.org/docs/rules/no-useless-call
        'no-useless-call': 2,

        // https://eslint.org/docs/rules/no-useless-catch
        'no-useless-catch': 2,

        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 2,

        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 2,

        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 2,

        // https://eslint.org/docs/rules/no-void
        'no-void': 2,

        // https://eslint.org/docs/rules/no-warning-comments
        'no-warning-comments': 0,

        // https://eslint.org/docs/rules/no-with
        'no-with': 2,

        // https://eslint.org/docs/rules/prefer-named-capture-group
        'prefer-named-capture-group': 2,

        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': [2, {
            allowEmptyReject: true,
        }],

        // https://eslint.org/docs/rules/prefer-regex-literals
        'prefer-regex-literals': 2,

        // https://eslint.org/docs/rules/radix
        radix: 2,

        // https://eslint.org/docs/rules/require-await
        'require-await': 2,

        // https://eslint.org/docs/rules/require-unicode-regexp
        'require-unicode-regexp': 2,

        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 2,

        // https://eslint.org/docs/rules/wrap-iife
        'wrap-iife': [2, 'outside'], // }()); パターンのみ許可

        // https://eslint.org/docs/rules/yoda
        yoda: 0,

        /*
         * --------------------------------------------------------------------
         * Strict Mode
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/strict
        strict: [2, 'function'],

        /*
         * --------------------------------------------------------------------
         * Variables
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/init-declarations
        'init-declarations': 0,

        // https://eslint.org/docs/rules/no-delete-var
        'no-delete-var': 2,

        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 2,

        // https://eslint.org/docs/rules/no-restricted-globals
        'no-restricted-globals': [2, {
            name: 'escape',
            message: 'Please use `encodeURIComponent` or `encodeURI`',
        }, {
            name: 'unescape',
            message: 'Please use `decodeURIComponent` or `decodeURI`',
        }],

        // https://eslint.org/docs/rules/no-shadow
        'no-shadow': 2,

        // https://eslint.org/docs/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 2,

        // https://eslint.org/docs/rules/no-undef
        'no-undef': 2,

        // https://eslint.org/docs/rules/no-undef-init
        'no-undef-init': 2,

        // https://eslint.org/docs/rules/no-undefined
        'no-undefined': 0,

        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': [2, {
            vars: 'all',
            args: 'after-used',
        }],

        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 2,

        /*
         * --------------------------------------------------------------------
         * Stylistic Issues
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': 0,

        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': [2, 'never'],

        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': 0,

        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': [2, 'always'],

        // https://eslint.org/docs/rules/brace-style
        'brace-style': [2, '1tbs', {
            allowSingleLine: false,
        }],

        // https://eslint.org/docs/rules/camelcase
        camelcase: [2, {
            properties: 'never',
            ignoreDestructuring: false,
        }],

        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': [0, 'always'],

        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [2, 'always-multiline'],

        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': [2, {
            before: false,
            after: true,
        }],

        // https://eslint.org/docs/rules/comma-style
        'comma-style': [2, 'last'],

        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': [2, 'never', {
            enforceForClassMembers: true,
        }],

        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': 0,

        // https://eslint.org/docs/rules/eol-last
        'eol-last': 2,

        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': [2, 'never'],

        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': [2, {
            considerPropertyDescriptor: false,
            includeCommonJSModuleExports: false,
        }],

        // https://eslint.org/docs/rules/func-names
        'func-names': 0,

        // https://eslint.org/docs/rules/func-style
        'func-style': 0,

        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': [2, 'multiline'],

        // https://eslint.org/docs/rules/function-call-argument-newline
        'function-call-argument-newline': [2, 'consistent'],

        // https://eslint.org/docs/rules/id-denylist
        'id-denylist': 0,

        // https://eslint.org/docs/rules/id-length
        'id-length': 0,

        // https://eslint.org/docs/rules/id-match
        'id-match': 0,

        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': [2, 'beside'],

        // https://eslint.org/docs/rules/indent
        indent: [2, 4, {
            SwitchCase: 0,
            VariableDeclarator: {
                var: 1,
                let: 1,
                const: 2,
            },
            outerIIFEBody: 1,
            // "MemberExpression": 1,
            FunctionDeclaration: {
                parameters: 'first',
                body: 1,
            },
            FunctionExpression: {
                parameters: 'first',
                body: 1,
            },
            CallExpression: {
                arguments: 'first',
            },
            ArrayExpression: 'first',
            ObjectExpression: 'first',
            ImportDeclaration: 'first',
            flatTernaryExpressions: true,
            // "ignoredNodes": [],
            ignoreComments: false,
        }],

        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [2, 'prefer-double'],

        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': 2,

        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': 2,

        // https://eslint.org/docs/rules/line-comment-position
        'line-comment-position': 0,

        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': [2, 'unix'],

        // https://eslint.org/docs/rules/lines-around-comment
        'lines-around-comment': 0,

        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': [2, 'always', {
            exceptAfterSingleLine: false,
        }],

        // https://eslint.org/docs/rules/max-depth
        'max-depth': 0,

        // https://eslint.org/docs/rules/max-len
        'max-len': 0,

        // https://eslint.org/docs/rules/max-lines
        'max-lines': 0,

        // https://eslint.org/docs/rules/max-lines-per-function
        'max-lines-per-function': 0,

        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': 0,

        // https://eslint.org/docs/rules/max-params
        'max-params': 0,

        // https://eslint.org/docs/rules/max-statements
        'max-statements': 0,

        // https://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': 0,

        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': 2,

        // https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': 0,

        // https://eslint.org/docs/rules/new-cap
        'new-cap': 2,

        // https://eslint.org/docs/rules/new-parens
        'new-parens': 2,

        // https://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': 0,

        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 2,

        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 1,

        // https://eslint.org/docs/rules/no-continue
        'no-continue': 0,

        // https://eslint.org/docs/rules/no-inline-comments
        'no-inline-comments': 0,

        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 0,

        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': 2,

        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': 2,

        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 2,

        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': [2, {
            max: 3,
        }],

        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 0,

        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 1,

        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 2,

        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 0,

        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [2, 'WithStatement'],

        // https://eslint.org/docs/rules/no-tabs
        'no-tabs': 1,

        // https://eslint.org/docs/rules/no-ternary
        'no-ternary': 0,

        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': [2, {
            skipBlankLines: false,
            ignoreComments: false,
        }],

        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 0,

        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': 2,

        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 2,

        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': [2, 'beside'],

        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': 0,

        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': [2, 'never'],

        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': 2,

        // https://eslint.org/docs/rules/one-var
        'one-var': [2, {
            var: 'never',
            let: 'never',
            const: 'never',
        }],

        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': 0,

        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': [2, 'always'],

        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': 0,

        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': [2, 'never'],

        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': [
            2,
            // return 文前には必ず空行を入れる
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            // 各種変数・定数宣言の後には必ず空行を入れる
            {
                blankLine: 'always',
                prev: ['var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['var'],
                next: ['const', 'let', 'var'],
            },
            // 各種 directive の後には必ず空行を入れる
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            },
        ],

        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 2,

        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 2,

        // https://eslint.org/docs/rules/quote-props
        'quote-props': [2, 'as-needed'],

        // https://eslint.org/docs/rules/quotes
        quotes: [2, 'single', 'avoid-escape'],

        // https://eslint.org/docs/rules/semi
        semi: [2, 'always'],

        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': [2, {
            before: false,
            after: true,
        }],

        // https://eslint.org/docs/rules/semi-style
        'semi-style': [2, 'last'],

        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': 0,

        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 0,

        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': [2, 'always'],

        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],

        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': [2, 'never'],

        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': [2, {
            int32Hint: true,
        }],

        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': [2, {
            words: true,
            nonwords: false,
        }],

        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [2, 'always', {
            block: {
                markers: ['*', '!', '*!'],
                balanced: true,
            },
        }],

        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': [2, {
            after: false,
            before: false,
        }],

        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': [2, 'never'],

        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': [1, 'never'],

        // https://eslint.org/docs/rules/wrap-regex
        'wrap-regex': 0,

        /*
         * --------------------------------------------------------------------
         * ECMAScript 6
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': [2, 'as-needed'],

        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': [2, 'always'],

        // https://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 2,

        // https://eslint.org/docs/rules/constructor-super
        'constructor-super': 2,

        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': [2, {
            before: true,
            after: false,
            named: {
                before: true,
                after: false,
            },
            anonymous: {
                before: true,
                after: false,
            },
            method: {
                before: true,
                after: false,
            },
        }],

        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 2,

        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': 2,

        // https://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 2,

        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 2,

        // https://eslint.org/docs/rules/no-duplicate-imports
        'no-duplicate-imports': 2,

        // https://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 2,

        // https://eslint.org/docs/rules/no-restricted-exports
        'no-restricted-exports': 0,

        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': 0,

        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 2,

        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': [2, {
            enforceForClassMembers: true,
        }],

        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 2,

        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': 2,

        // https://eslint.org/docs/rules/no-var
        'no-var': 2,

        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [2, 'always', {
            avoidQuotes: true,
            ignoreConstructors: false,
            avoidExplicitReturnArrows: true,
        }],

        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': [2, {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': [2, {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
        }],

        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [2, {
            object: true,
            array: true,
        }],

        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 2,

        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 2,

        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 2,

        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 2,

        // https://eslint.org/docs/rules/require-yield
        'require-yield': 2,

        // https://eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': [2, 'never'],

        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': 0,

        // https://eslint.org/docs/rules/symbol-description
        'symbol-description': 2,

        // https://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': [2, 'never'],

        // https://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': [2, {
            before: false,
            after: true,
        }],
    },
};
