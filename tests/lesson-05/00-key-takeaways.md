# Lesson 5
## Javascript - Function Advance
### Function Expression (Biểu thức hàm)
> Định nghĩa bằng cách gán cho nó một biến
```typescript
// Function Declaration (khai báo hàm)
function add(a,b) {
    return a + b;
}

//Function Expression 
const add = function(a,b) {
    return a + b;
}

const str = function(name) {
    return `Hello ${name}`;
}

const num = function(price, quantity, discount) {
    return price * quantity - discount;
}

```

## Lambda Function (Arrow Function)
- Xuất hiện lần đầu trong ES6 (ES2015)
- cách viết ngắn gọn hơn cho function
- sử dụng dấu =>
- Có dạng cú pháp ngắn gọn nhất (implicit return)

``` typescript
// Arrow function (Lambda)
const add = (a, b) => {
    return a + b;
}
// Cú pháp ngắn gọn nhất (implicit return)
const add = (a, b) => a + b;

 // Cách viết gọn không tham số
const add = () => console.log('add');

// Cách viết gọn 1 tham số - bỏ ngoặc tròn
const double = x => x * 2;

// hoặc giữ ngoặc tròn 
const triple = (x) => x * 3;

```

### Anonymous Function
- Function không tên
- Được sử dụng khi function chỉ cần dùng 1 lần hoặc làm callback
- Anonymous function phải được sử dụng ngay -> gán cho 1 biến


```typescript
// Named function 
function namedFunction() {
    console.log("I havea name!");
}

// Anonymous function (không tên)
function() { // SyntaxError! Không thể đứng 1 mình
    console.log("I'm anonymous");
}

// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a varibale!");
}

```
## DOM = Document Object Model
- website được nhìn dưới dạng khối text, hình ảnh, liên kết, ô input, ...
- Máy tính nhìn ở dưới dạng "cây có cấu trúc" **(DOM)**:
    - Mở cây này bằng cách bấm F12
    - Hoặc right click  vào chỗ trống -> chọn "Inspect" -> chọn tab "Element"
### Node
- Thẻ/tag mở đóng
![Tag_open-close](./images/open-close-Tag.png)
- Thẻ tự đóng
![Tag_auto_closed](./images/auto-close-Tag.png)
- Có nhiều loại thẻ khác nhau
    - Thẻ tiêu chuẩn: do tổ chức uy tín [mozilla định nghĩa](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
    - Thẻ tự định nghĩa: do lập trình viên/ Web tự định nghĩa. Thường ko có độ tương thích cao trên nhiều nền tảng (hay gặp ở các dự án lâu đời của Nhật)
### Thẻ tiêu chuẩn thường gặp
1. **Thẻ cấu trúc khung trang**
- `<html>`: thẻ gốc của trang
- `<head>`: chứa metadata: tiêu đề web, hiển thị Google
- `<body>`: Nội dung của cả web hiển thị
2. **Thẻ bố cục & ngữ nghĩa**
- `<div>`: khối/ container chung
- `<span>`: Inline container (phần tử nội tuyến)
- `<header>`, `<footer>`, `<nav>`, `<section>`: thẻ ngữ nghĩa
3. **Thẻ nội dung**
- `<h1>` đến `<h6>`: tiêu đề
- `<p>`: đoạn văn
- `<ul>` (unorder list), `<ol>` (order list), `<li>` (list): danh sách
4. **Thẻ tương tác & Media**
- `<a>`: liên kết
- `<img>`: hình ảnh
5. **Thẻ Form (quan trọng cho testing)**
- `<form>`: biểu mẫu
- `<input>`: ô nhập liệu (text, password, email, number, telephone, url, search, date, time, datetime, month, week, checkbox, radio, range, color, file)
- `<button>`: nút bấm
- `<select>`, `<option>`: Thẻ `<select>` tạo danh sách thả xuống, `<option>` định nghĩa các lựa chọn.
    > chọn nhiều option, nhấn giữ `Ctrl/Cmd`
- `<textarea>`: vùng văn bản nhiều dòng

- ![the_cau_truc_khung](./images/the_cau_truc_khung.png)
- ![the_tieu_chuan](./images/the_tieu_chuan.png)
- ![the_noi_dung](./images/the_noi_dung.png)
- ![the_form](./images/the_form.png)
- **Demo các thẻ:** https://material.playwrightvn.com/035-DOM-elements.html

### Một số Thẻ HTML thông dụng khác
- `<table>`: hiển thị bảng dữ liệu
    -`<thead>`= table heading - chứa phần đầu bảng
        - `<tr>` = table row = 1 tạo hàng
            - `<th>`: table heading: text in đậm - tạo ô tiêu đề
    - `<tbody>`:
        - `<tr>` -> `<td>` = tạo ô dữ liệu
    - `colspan`: thuộc tính để gộp cột
- `date picker`: tạo bộ chọn ngày
- `slider`: tạo thanh trượt
- `iframe`: hiển thị nội dung từ 1 trang web khác bên trong trang hiện tại


## Selector
- **Automation = tương tác** với các phần tử trên trang web, như input, fill, click, etc. -> để tương tác được, cần tìm phần tử này 
- **Selector** là công cụ giúp tìm phần tử, có 3 loại **Selector**
    - XPath
        - Dùng được trong hầu hết trường hợp (99.99%)
        - Đa dạng, có khả năng tìm các phần tử khó
        - Hơi dài
        - Ví dụ: `//button[normalizae-spac() = 'Add to cart']`
    - CSSS selector
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm
        - không linh hoạt bằng XPath
        - Ví dụ `.add-to-cart`
    - Playwright selector
        - Dùng riêng cho Playwright
        - Cú pháp ngắn gọn. ko phụ thuộc cấu trúc DOM
        - Hướng tới "giống user đang nhìn thấy gì"
        - VD: `page.getByText("Add to cart");`
> Vẫn cần học hiểu cả ba loại để có thể “cân” được mọi loại dự án.
>> Có những dự án “thích” dùng CSS, “thích” dùng XPath, ta buộc phải tuân theo.

### XPath = XML Path:
- Có 2 loại: 
    - **Tuyệt đối:** đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - **Tương đối:** tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - //ten_the[@thuoc_tinh="gia_tri"]
> Nên dùng XPath tương đối
#### XPath tuyệt đối
- Bắt đầu từ root (gốc), dùng dấu /
- **Đặc điểm**: 
    - Bắt đầu bằng `/`
    - Phải viết đầy đủ đường dẫn từ root
    - Dễ bị lỗi khi cấu trúc HTML thay đổi
    - Ít linh hoạt
- vd: `/html/body/div/input`
- ![xpath_tuyet_doi](./images/xpath_tuyet_doi.png)
#### XPath tương đối
- Bắt đầu từ bất kỳ đâu trong DOM, dùng //
- **Đặc điểm**: 
    - Bắt đầu bằng `//`
    - Tìm element ở bất kỳ vị trí nào
    - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
    - **Nên dùng** trong thực tế 
- ví dụ: `//input[@id=’user’]`
- ![xpath_tuong_doi](./images/xpath_tuong_doi.png)
#### Khi nào dùng gì? 
- Dùng tương đối (`//`): 99% case
- Tránh dùng tuyệt đối (`/`): chỉ khi bạn chắc chắn cấu trúc ko đổi
- **Mẹo:** luôn kết hợp với attributes như `@id, @class, @name` để XPath chính xác hơn 
### CSS Selector

### Playwright selector

## Playwright basic syntax
- **Automation = tương tác + verify**
- **test** đơn vị cơ bản để khai báo 1 test
- **step** đơn vị nhỏ hơn test, để khai báo từng step của step case
    - Step nên được map 1-1 với test case để dễ dàng maintain
```typescript
await test.step('Tên step', async () => {
    // Code here
});

------

test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
        // Code here
    });
});
```
- **navigate**
```typescript
await page.goto('https://pw-practice.playwrightvn.com/');
```

- **Locate**
    - sử dụng `page.locator("selector)` để chọn phần tử trên trang
```typescript
page.locator(“//input[@id=’email’]”)
```

- **Click**
```typescript
// Single click
await page.locator("//button").click();

// Double click
await page.locator("//button").dblclick();

// Click chuột phải
page.locator("//button").click({
    button: 'right'
})
// Click chuột kèm bấm phím khác
page.locator("").click({
    modifiers: ['Shift'],
})
```

- **Input**
```typescript
// Fill
// Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');

// pressSequentially
// Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright Viet Nam', {
    delay: 100,
});
```

- **Radio/checkbox**
```typescript
//  Lấy giá trị hiện tại đang là check hay không:
const isChecked =
    page.locator("//input").isChecked();

// Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

- **Select**
```typescript
await page.locator('//select[@id=”country”]')
          .selectOption({ label: 'USA' })
```

- **Upload file**
```typescript
await page.locator("//input[@id='profile']")
            .setInputFiles("<file-path>");
```