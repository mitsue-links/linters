import path from 'path';
import {lintFile} from './helper.mjs';

describe('ECMAScript 2015', () => {
    test('es2015_ok.mjs', async () => {
        const filePath = 'es2015_ok.mjs';
        const data = await lintFile(path.join('fixtures', filePath));

        expect(data).toStrictEqual([{
            filePath,
            messages: [],
        }]);
    });
});
