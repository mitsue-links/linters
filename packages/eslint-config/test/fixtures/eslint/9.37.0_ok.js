/* eslint-disable no-unused-vars, no-console */

// no-unassigned-vars: 変数に値を代入してから使用している例
function testUnassignedVar() {
    const status = 'ready';
    if (status === 'ready') {
        console.log('Ready!');
    }
}

// preserve-caught-error: キャッチしたエラーをcauseとして保持して再スローしている例
function testPreserveCaughtError() {
    try {
        throw new Error('Original error');
    } catch (error) {
        throw new Error('Something went wrong', { cause: error });
    }
}
