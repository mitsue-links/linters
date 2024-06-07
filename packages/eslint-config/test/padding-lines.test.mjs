import path from 'path';
import {lintFile} from './helper.mjs';

test('padding-lines_ok.mjs', async () => {
    const filePath = 'padding-lines_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('padding-lines_error.mjs', async () => {
    const filePath = 'padding-lines_error.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
