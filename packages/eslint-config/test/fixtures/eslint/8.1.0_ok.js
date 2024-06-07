// no-unused-private-class-members
/* eslint-disable no-unused-vars */
class C {
    #value1 = false;

    #field1 = function () {
        return this.#value1;
    };

    #field2 = () => this.#value1;

    #method1() {
        return this.#value1;
    }

    method2() {
        if (this.#field1()) {
            return this.#field2();
        }

        return this.#method1();
    }
}
