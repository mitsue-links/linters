/* eslint strict: [2, "global"] */
'use strict';

const {createESLint} = require('./helper');

test('非推奨になったルールを設定していない', async () => {
    const engine = createESLint();
    const result = await engine.lintFiles(__filename);

    expect(result[0].usedDeprecatedRules).toStrictEqual([]);
});
