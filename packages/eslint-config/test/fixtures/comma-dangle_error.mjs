// comma-dangle
/* eslint-disable no-console */
(() => {
    const a = 2;
    const b = 3;
    const c = 5;

    console.log([a, b, c]);
    console.log([
        a,
        b,
        c
    ]);

    console.log({
        a,
        b,
        c
    });

    function f1(x, y, z) {
        return x * y * z;
    }

    console.log(f1(7, 11, 13));

    function f2(
        x,
        y,
        z
    ) {
        return x * y * z;
    }

    console.log(f2(7, 11, 13));
})();
/* eslint-enable no-console */
