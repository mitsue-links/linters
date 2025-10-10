/* eslint-disable no-unused-vars, no-console */

// no-unassigned-vars: 未代入の変数を使用している例
function testUnassignedVar() {
    let status;
    if (status === 'ready') {
        console.log('Ready!');
    }
}

// preserve-caught-error: キャッチしたエラーのcauseを保持せずに再スローしている例
function testPreserveCaughtError() {
    try {
        throw new Error('Original error');
    } catch (error) {
        throw new Error(`Something went wrong: ${error.message}`);
    }
}
