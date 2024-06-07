/* eslint strict: [2, "global"] */
'use strict';

import {fileURLToPath} from 'url';
import {createESLint} from './helper.mjs';

test('非推奨になったルールを設定していない', async () => {
    const __filename = fileURLToPath(import.meta.url);
    const engine = createESLint();
    const results = await engine.lintFiles(__filename);

    expect(results[0].usedDeprecatedRules).toStrictEqual([]);
});
