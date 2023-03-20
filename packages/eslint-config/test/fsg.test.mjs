import path from 'path';
import {lintFile} from './helper.mjs';

test('fsg_ok.mjs', async () => {
    const filePath = 'fsg_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('fsg_error.mjs', async () => {
    const filePath = 'fsg_error.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
