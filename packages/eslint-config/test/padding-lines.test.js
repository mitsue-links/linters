/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

test('padding-lines_ok.js', async () => {
    const filePath = 'padding-lines_ok.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('padding-lines_error.js', async () => {
    const filePath = 'padding-lines_error.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
