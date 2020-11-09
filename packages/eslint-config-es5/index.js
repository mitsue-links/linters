module.exports = {
    /*
     * see also:
     * https://eslint.org/docs/user-guide/configuring
     */
    extends: '@mitsue',

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

        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 0, // ES5を考慮して無効

        /*
         * --------------------------------------------------------------------
         * Best Practices
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/prefer-named-capture-group
        'prefer-named-capture-group': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/require-unicode-regexp
        'require-unicode-regexp': 0, // ES5を考慮して無効


        /*
         * --------------------------------------------------------------------
         * Strict Mode
         * --------------------------------------------------------------------
         */

        /*
         * --------------------------------------------------------------------
         * Variables
         * --------------------------------------------------------------------
         */

        /*
         * --------------------------------------------------------------------
         * Stylistic Issues
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [2, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never', // ES5を考慮して無効
            exports: 'never', // ES5を考慮して無効
            functions: 'never', // ES5を考慮して無効
        }],

        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 0, // ES5を考慮して無効

        /*
         * --------------------------------------------------------------------
         * ECMAScript 6
         * --------------------------------------------------------------------
         */

        // https://eslint.org/docs/rules/no-var
        'no-var': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 0, // ES5を考慮して無効

        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 0, // ES5を考慮して無効
    },
};
