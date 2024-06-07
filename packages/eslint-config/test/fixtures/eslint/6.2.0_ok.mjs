// function-call-argument-newline
/* eslint-disable no-unused-vars, no-undef */
(function () {
    foo('one', 'two', 'three');
    // or
    foo(
        'one',
        'two',
        'three',
    );

    bar('one', 'two', {
        one: 1,
        two: 2,
    });
    // or
    bar(
        'one',
        'two',
        { one: 1, two: 2 },
    );
    // or
    bar(
        'one',
        'two',
        {
            one: 1,
            two: 2,
        },
    );

    baz('one', 'two', (x) => {
        // ...
    });
    // or
    baz(
        'one',
        'two',
        (x) => {
            // ...
        },
    );
}());
/* eslint-enable no-unused-vars, no-undef */
