/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

test('comma-dangle_ok.js', async () => {
    const filePath = 'comma-dangle_ok.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('comma-dangle_error.js', async () => {
    const filePath = 'comma-dangle_error.js';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
