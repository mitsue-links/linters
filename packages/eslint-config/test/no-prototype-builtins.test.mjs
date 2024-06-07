import path from 'path';
import {lintFile} from './helper.mjs';

test('no-prototype-builtins_ok.mjs', async () => {
    const filePath = 'no-prototype-builtins_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('no-prototype-builtins_error.mjs', async () => {
    const filePath = 'no-prototype-builtins_error.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
