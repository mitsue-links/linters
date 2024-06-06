// no-empty-static-block
/* eslint-disable no-unused-vars */
class C {
    static {}
}

// no-new-native-nonconstructor
const foo = new Symbol('foo');
const result = new BigInt(9007199254740991);
