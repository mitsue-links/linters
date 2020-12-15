/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

process.chdir(__dirname);

describe('ECMAScript 2015', () => {
    test('es2015_fail.js', async () => {
        const filePath = 'es2015_fail.js';
        const data = await lintFile(path.join('fixtures', filePath));

        expect(data).toMatchSnapshot();
    });

    test('es2015_error.js', async () => {
        const filePath = 'es2015_error.js';
        const data = await lintFile(path.join('fixtures', filePath));

        expect(data).toMatchSnapshot();
    });
});
