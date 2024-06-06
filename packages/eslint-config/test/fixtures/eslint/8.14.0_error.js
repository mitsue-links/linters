// no-constant-binary-expression
/* eslint-disable no-console, no-unused-vars */
const a = 1;
const b = 2;
const c = 3;

const x = a + b ?? c;

const someObj = {};
const someArr = {};

if (someObj === {}) {
    console.log('this log will never be displayed.');
}

if (someArr === []) {
    console.log('This log also never appears.');
}
