import path from 'path';
import {lintFile} from './helper.mjs';

test('regexp_ok.mjs', async () => {
    const filePath = 'regexp_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('regexp_error.mjs', async () => {
    const filePath = 'regexp_error.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
