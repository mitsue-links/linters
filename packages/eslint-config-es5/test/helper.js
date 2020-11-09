/* eslint strict: [2, "global"] */
'use strict';

const path = require('path');
const {ESLint} = require('eslint');

/**
 * @param {import('eslint').ESLint.LintMessage[]} messages
 */
function summarizeLintMessages(messages) {
    return messages.sort((a, b) => {
        if (a.line !== b.line) {
            return a.line - b.line;
        }

        if (a.column !== b.column) {
            return a.column - b.column;
        }

        const aRuleId = a.ruleId || a.message;
        const bRuleId = b.ruleId || b.message;

        if (aRuleId !== bRuleId) {
            return aRuleId.localeCompare(bRuleId);
        }

        return 0;
    }).map(({line, ruleId, message, severity}) => ({
        line,
        ruleId: ruleId || message,
        severity,
    }));
}

/**
 * @param {import('eslint').ESLint.LintResult[]} results
 */
function summarizeLintResults(results) {
    return results.map(({filePath, messages}) => ({
        filePath: path.basename(filePath),
        messages: summarizeLintMessages(messages),
    }));
}

/**
 * @param {string} filePath
 */
async function lintFile(filePath) {
    const engine = new ESLint({
        cwd: __dirname,
        overrideConfigFile: path.join(__dirname, 'fixtures', '.eslintrc.json'),
    });

    const results = await engine.lintFiles(filePath);

    return summarizeLintResults(results);
}

module.exports = {
    lintFile,
};
