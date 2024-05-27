import path from 'path';
import {lintFile} from './helper.mjs';

test('commonjs_ok.cjs', async () => {
    const filePath = 'commonjs_ok.cjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('commonjs_ok.mjs', async () => {
    const filePath = 'commonjs_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});


test('commonjs_error.cjs', async () => {
    const filePath = 'commonjs_error.cjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});

test('commonjs_error.mjs', async () => {
    const filePath = 'commonjs_error.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
