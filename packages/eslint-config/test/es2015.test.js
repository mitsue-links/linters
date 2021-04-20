/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

process.chdir(__dirname);

describe('ECMAScript 2015', () => {
    test('es2015_ok.js', async () => {
        const filePath = 'es2015_ok.js';
        const data = await lintFile(path.join('fixtures', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });
});
