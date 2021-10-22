/* eslint-disable no-unused-vars */
class C {
    field1 = function () {
        return this.field3;
    };

    field2 = () => this.field3;

    field3 = 'const';
}
