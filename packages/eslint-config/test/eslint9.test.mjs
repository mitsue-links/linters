import path from 'path';
import {lintFile} from './helper.mjs';

describe('ESLint 9.0.0', () => {
    test('9.0.0_error.mjs', async () => {
        const filePath = '9.0.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 9.37.0', () => {
    test('9.37.0_error.mjs', async () => {
        const filePath = '9.37.0_error.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
    test('9.37.0_ok.mjs', async () => {
        const filePath = '9.37.0_ok.js';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
