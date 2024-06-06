// no-unused-private-class-members
/* eslint-disable no-unused-vars */
class C {
    value1 = true;

    #value2 = false;

    #field1 = function () {
        return this.value1;
    };

    #field2 = () => this.value1;

    #method1() {
        return this.value1;
    }
}
