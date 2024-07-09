import globals from 'globals';
import eslintConfig from './index.mjs';

export default [
    ...eslintConfig,
    {
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    {
        ignores: ['**/test/fixtures/*'],
    }
];
