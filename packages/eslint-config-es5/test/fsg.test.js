/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

process.chdir(__dirname);

test('fsg_ok.js', async () => {
    const filePath = 'fsg_ok.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('fsg_error.js', async () => {
    const filePath = 'fsg_error.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
