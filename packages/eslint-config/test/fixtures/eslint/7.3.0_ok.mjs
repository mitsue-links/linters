// no-promise-executor-return
/* eslint-disable no-undef */
(() => {
    const promise = new Promise((resolve, reject) => {
        f((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    return promise;
})();
/* eslint-enable no-undef */

// no-unreachable-loop
/* eslint-disable no-undef */
(() => {
    const primes = [2, 3, 5, 7, 11, 13];

    for (const prime of primes) {
        if (prime % 2 === 0) {
            foundEven(prime);
            break;
        }
    }
})();
/* eslint-enable no-undef */
