// no-empty-static-block
/* eslint-disable no-unused-vars */
class C {
    static {
        // no empty static block
    }
}

// no-new-native-nonconstructor
const foo = Symbol('foo');
const result = BigInt(9007199254740991);
