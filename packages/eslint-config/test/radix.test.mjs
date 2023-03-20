import path from 'path';
import {lintFile} from './helper.mjs';

test('radix_ok.mjs', async () => {
    const filePath = 'radix_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});
