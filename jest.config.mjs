/** @type {import('jest').Config} */
const config = {
    testMatch: [
        '**/__tests__/**/*.?([mc])[jt]s?(x)',
        '**/?(*.)+(spec|test).?([mc])[tj]s?(x)',
    ],
};

export default config;
