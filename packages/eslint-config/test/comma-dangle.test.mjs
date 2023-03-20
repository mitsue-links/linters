import path from 'path';
import {lintFile} from './helper.mjs';

test('comma-dangle_ok.mjs', async () => {
    const filePath = 'comma-dangle_ok.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toStrictEqual([{
        filePath,
        messages: [],
    }]);
});

test('comma-dangle_error.mjs', async () => {
    const filePath = 'comma-dangle_error.mjs';
    const data = await lintFile(path.join('fixtures', filePath));

    expect(data).toMatchSnapshot();
});
