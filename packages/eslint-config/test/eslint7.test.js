/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {lintFile} = require('./helper');

describe('ESLint 7.0.0', () => {
    test('7.0.0_ok.js', async () => {
        const filePath = '7.0.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('7.0.0_error.js', async () => {
        const filePath = '7.0.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.1.0', () => {
    test('7.1.0_error.js', async () => {
        const filePath = '7.1.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.3.0', () => {
    test('7.3.0_ok.js', async () => {
        const filePath = '7.3.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });


    test('7.3.0_error.js', async () => {
        const filePath = '7.3.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.14.0', () => {
    test('7.14.0_error.js', async () => {
        const filePath = '7.14.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.15.0', () => {
    test('7.15.0_ok.js', async () => {
        const filePath = '7.15.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('7.15.0_error.js', async () => {
        const filePath = '7.15.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
