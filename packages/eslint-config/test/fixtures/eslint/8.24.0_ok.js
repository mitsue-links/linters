// logical-assignment-operators
const a = {
    duration: 50,
    title: '',
};

a.duration = a.duration && 10; // OK
a.title = a.title || 'title is empty.'; // OK
a.duration &&= 10; // OK
a.title ||= 'title is empty.'; // OK

if (a.duration) {
    a.duration = 10; // OK
}
