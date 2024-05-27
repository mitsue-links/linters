import path from 'path';
import {lintFile} from './helper.mjs';

describe('ESLint 6.2.0', () => {
    test('6.2.0_ok.mjs', async () => {
        const filePath = '6.2.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('6.2.0_error.mjs', async () => {
        const filePath = '6.2.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 6.4.0', () => {
    test('6.4.0_ok.mjs', async () => {
        const filePath = '6.4.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('6.4.0_error.mjs', async () => {
        const filePath = '6.4.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 6.5.0', () => {
    test('6.5.0_ok.mjs', async () => {
        const filePath = '6.5.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('6.5.0_error.mjs', async () => {
        const filePath = '6.5.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 6.6.0', () => {
    test('6.6.0_ok.mjs', async () => {
        const filePath = '6.6.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('6.6.0_error.mjs', async () => {
        const filePath = '6.6.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});

describe('ESLint 6.7.0', () => {
    test('6.7.0_ok.mjs', async () => {
        const filePath = '6.7.0_ok.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });

    test('6.7.0_error.mjs', async () => {
        const filePath = '6.7.0_error.mjs';
        const data = await lintFile(path.join('fixtures', 'eslint', filePath));

        expect(data).toMatchSnapshot();
    });
});
