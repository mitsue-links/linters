/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

process.chdir(__dirname);

describe('ESLint 6.7.0', () => {
    test('6.7.0_ok.js', async () => {
        const filePath = '6.7.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('6.7.0_fail.js', async () => {
        const filePath = '6.7.0_fail.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
