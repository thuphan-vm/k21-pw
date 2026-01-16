const { log } = require("console");

/* 1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. 
Sau đó in ra năm sản xuất của xe. */
const car = {
    make: 'Tokyo',
    model: 'Corolla',
    year: 2021
}
console.log(`Year: ${car.year}`);

/* 2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). 
In ra tên đường của người này. */
const person = {
    name: 'Iron Man',
    address: {
        street: 'Ho Van Hue',
        city: 'HCM',
        country: 'Vietnam'
    }
}
console.log('Street:', person.address.street);

/* 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. 
Trong đó grades là một object với 2 thuộc tính kiểu number: math và english */
const student = {
    name: 'Thor',
    grades: {
        math: 100,
        english: 99
    }
}
console.log("Grades math:", student["grades"]["math"]);

/* 4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. 
Thay đổi volume và in ra object mới. */
const settings = {
    volume: 90,
    brightness: 50.0
}
settings.volume = 91; // Set new value
console.log("New settings:", settings);

/* 5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó */
const bike = {}
bike.color = "red"; // add new attribute
console.log("New bike:", bike);


/* 6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này */
const employee = {
    name: "Thanos",
    age: 25
}
delete employee.age; // remove attribute
console.log("New employee:", employee);

/* 7. Một trường học có các lớp học và học sinh như sau:
- classA: An, Bình, Châu
- classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
Vd:
const school = { classA: ["Giang"]...} */
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
}
console.log("school:", school);

