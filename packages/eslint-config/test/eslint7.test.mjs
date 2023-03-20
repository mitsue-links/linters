import path from 'path';
import {lintFile} from './helper.mjs';

describe('ESLint 7.0.0', () => {
    test('7.0.0_ok.mjs', async () => {
        const filePath = '7.0.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('7.0.0_error.mjs', async () => {
        const filePath = '7.0.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.1.0', () => {
    test('7.1.0_error.mjs', async () => {
        const filePath = '7.1.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.3.0', () => {
    test('7.3.0_ok.mjs', async () => {
        const filePath = '7.3.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });


    test('7.3.0_error.mjs', async () => {
        const filePath = '7.3.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 7.15.0', () => {
    test('7.15.0_ok.mjs', async () => {
        const filePath = '7.15.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('7.15.0_error.mjs', async () => {
        const filePath = '7.15.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
