/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

describe('ESLint 8.0.0', () => {
    test('8.0.0_ok.js', async () => {
        const filePath = '8.0.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('8.0.0_error.js', async () => {
        const filePath = '8.0.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
