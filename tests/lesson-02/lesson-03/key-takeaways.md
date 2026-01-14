# Lesson 3

## Git
### Undo actions
- Change commit message:
`git commit --amend "new message"`   
- Transfer file(s) from staging area to working directory area : 
`git restore --staged <file>`
- Transfer file(s) from repository area to working directory area (uncommit)
`git reset HEAD~1` (undo 1 commit)
- Commit đầu tiên không thể bị reset.
- Nếu muốn reset → xoá thư mục *.git* đi rồi *init* lại

### Branching model
### Ignore file

## Javascript

### Convention
- snake_case_name : tạm thời không dùng
- kebab-case-name : đặt tên file và folder
- camelCaseName : đặt tên biến, hàm
- PascalCaseName : đặt tên class
### console.log
> giúp debug và theo dõi code
```typescript
console.log('Toi la Nga');

console.log("Toi la Phong");

console.log(`${variable_name}`);

let name = "Nga";
console.log(`Toi la ${name}`);

console.log("Toi ten la" + name + " ");
```

### Object
- Object: là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến/ hằng số
- Khai báo:
``` typescript
    let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        …
    }
    // giá trị có thể là biến hoặc 1 object khác
```
- Ví dụ:
``` typescript
    let user = {“name”: “Alex”, “age”: 10, “email”: “alex@gmail.com”}
    const product = {
            “name”: “Laptop”,
            “price”: 500,
            “isWindow”: true,
            “manufacturer”: {
                “name”: “Acer”,
                “year”: 2024
    }
```
- Sử dụng:
``` typescript
    console.log("name = " + user.name);
    console.log("manufacturer name = " + product.manufacturer.name);
    console.log("price = ", product[“price”]);
```
- Gắn lại giá trị: **cả let và const đều gắn lại value khác được. Nhưng không thể khai báo đè lại**
    - `user.age = 28`
    -` product[“manufacturer”][“year”] = 2025`
    - Can't use: 
    ``` typescript
        const product = {
            ...
            “manufacturer”: {
                ...
                “year”: 2025
        } 
    ```
        - Khi dùng const (hằng số), thì giá trị sẽ không thay đổi được. Ví dụ:
        const a = 10;
        a = 15; // lỗi
        Đối với object cũng vậy, nếu thay cả object bằng một object mới, cũng sẽ gặp lỗi. Ví
        dụ:
        const student = {“name”: “lisa”, “age”: 20}
        student = {“name”: “Kathy”, “age”: 18} // lỗi
        Nhưng, nếu chỉ thay đổi các thuộc tính của object thì hoàn toàn hợp lệ. Ví dụ,
        chỉ thay giá trị của name trong object student:
        const student = {“name”: “lisa”, “age”: 20}
        student.name = “Kathy”; // Hợp lệ
- Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định
nghĩa thuộc tính mới. 
Ví dụ:
    let bike = {
        make: 'Yamaha',
        model: 'YZF-R3'
    };
    bike.color = “Blue”;
    bike[“price new”] = 100;
    console.log(bike);
    {make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}

### Logical operator
    - `&&`: cả 2 vế mệnh đề đều đúng
    - `||`: 1 trong 2 vế mệnh đều đúng
    - `!`: đảo ngược value, example: !a, !!b
