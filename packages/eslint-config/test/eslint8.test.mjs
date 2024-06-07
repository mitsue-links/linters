import path from 'path';
import {lintFile} from './helper.mjs';

describe('ESLint 8.0.0', () => {
    test('8.0.0_ok.mjs', async () => {
        const filePath = '8.0.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('8.0.0_error.mjs', async () => {
        const filePath = '8.0.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 8.1.0', () => {
    test('8.1.0_ok.js', async () => {
        const filePath = '8.1.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('8.1.0_error.js', async () => {
        const filePath = '8.1.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 8.5.0', () => {
    test('8.5.0_ok.js', async () => {
        const filePath = '8.5.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('8.5.0_error.js', async () => {
        const filePath = '8.5.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 8.14.0', () => {
    test('8.14.0_error.js', async () => {
        const filePath = '8.14.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 8.24.0', () => {
    test('8.24.0_ok.js', async () => {
        const filePath = '8.24.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });
});

describe('ESLint 8.27.0', () => {
    test('8.27.0_ok.js', async () => {
        const filePath = '8.27.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('8.27.0_error.js', async () => {
        const filePath = '8.27.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 8.50.0', () => {
    test('8.50.0_ok.js', async () => {
        const filePath = '8.50.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('8.50.0_error.js', async () => {
        const filePath = '8.50.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
