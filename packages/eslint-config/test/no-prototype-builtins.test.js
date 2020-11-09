/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

test('no-prototype-builtins_ok.js', async () => {
    const filePath = 'no-prototype-builtins_ok.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('no-prototype-builtins_error.js', async () => {
    const filePath = 'no-prototype-builtins_error.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
