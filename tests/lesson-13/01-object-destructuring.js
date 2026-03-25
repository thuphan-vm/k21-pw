const myClass = {
    school: 'BBA',
    course: 'Full-stack QA',
    order: 1,
    address: {
        city: "Ha Noi",
        country: "Viet Nam"
    }
};

// const school = myClass.school;
// const course = myClass.course;
// const order = myClass.order;
// const address = myClass.address;

const { school, course, order, address } = myClass;

console.log(school);     // => 'BBA',
console.log(course); // => 'Full-stack QA'
