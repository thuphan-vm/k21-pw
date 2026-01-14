# Lesson 2

## Version control system (VCS)
- Là hệ thống quản lý các phiên bản
- Giúp dễ dàng xem lịch sử thay đổi (when/who/what changed? ...)
- 3 loại lưu trữ: Local (store ở máy cá nhân), Centralized (store ở 1 máy chủ tập trung), Distributed (store ở nhiều máy khác nhau). Phổ biến nhất là Distributed
    + Local: không thể cộng tác - offline - tốc độ nhanh - không backup - ít phức tạp
    + Centralized: có thể cộng tác - online - tốc độ phụ thuộc mạng - backup (có trên server) - phức tạp trung bình
    + Distributed: có thể cộng tác - online - tốc độ nhanh - backup (mọi clone) - phức tạp cao
***
***

## Git: 
### Phân biệt Git, GitHub
#### **Git**: là 1 phần mềm cài trên máy, command line tool, tool quản lý phiên bản, đưa file vào Git repository, có tính năng VCS (1 loại Distributed Version Control System (DVCS)), cha đẻ là Linux Torvalds, có tính năng branching tốc độ xử lý nhanh, free
#### **GitHub**: dịch vụ web, host trên web, có giao diện, nơi upload Git repository, có tính năng VCS + 1 số tính năng khác
> **GitLab**: cũng là 1 dịch vụ Web, ra đời sau GitHub. Doanh nghiệp lớn B2B, có dùng hệ sinh thái của Microsoft thường dùng github. GitLab thì doanh nghiệp nhỏ/ vừa b2c, mạnh về tech ưu tiên dùng hơn (do dễ cấu hình)

### Git - three states
1. Working Directory: 
Các file mới hoặc có thay đổi
Lệnh: git init
2. Staging Area:
file được đưa vào vùng chuẩn bị commit (tạo phiên bản mới)
lệnh: git add . or git add <fileName>
3. Repository: các commit
lệnh: git commit -m "message"
> Ngoài ra, hiểu vùng Local là chưa có sự quản lý của git (chưa chạy git init)

### Git Global (default)
- `git config --global user.name "name"`
- `git config --global user.email "email"`

### Git cho 1 repo
- `git config user.name "name"`
- `git config user.email "email"`

### Git simple workflow
- Dùng Global config
init -> add -> commit -> push
- Ko dùng Global: 
init -> config -> add -> commit -> push

### Câu lệnh Push code 
- `git push origin main`

### Xem trạng thái file:
- `git status`
    + File màu xanh: vùng staging
    + File màu đỏ: vùng working directory  
    + File không hiển thị: đã vào vùng Repository

### Kiểm tra danh sách commit:
- `git log`
- Nhấn mũi tên trỏ xuống để xem hết danh sách. Kết thúc bằng END.
- Gõ `q`: để thoát, khi danh sách commit quá dài

### Git Convention commit 
- `<type>: <short_description>`
- type: loại commit
    + chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
    + feat: thêm tính năng mới, test case mới
    + fix: sửa lỗi 1 test trước đó
- short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.
***
***

## JavaScript basic
- Là 1 ngôn ngữ lập trình (from 1995 by Brendan Eich)
- Giúp browser hoạt động
- Top 1 language: 
[survey top language by StackOverflow](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-programming-scripting-and-markup-languages)
- Chạy được do browser engine support  **(research more)**
- Để chạy trên máy tính không cần trình duyệt thì cần có Node JS
- Run time **(research more)**

### Lệnh chạy: 
- `node < file name with path>`

### Comment: 
- Dòng code được comment sẽ bị vô hiện hóa/ bỏ qua, không được thực thi.
- Có 2 cách comment:
    + Comment 1 dòng: thêm `//` vào trước đoạn code muốn comment
    + Comment nhiều dòng: thêm `/*` vào trước dòng đầu tiên và `*/` sau dòng cuối cùng


### Variable: 
- Khai báo: 
    - `var <variableName> = <value>;`

    - `let <variableName> = <value>;`

    - `const <variableName> = <value not change>;`

- `var`: biến global, có thể khai báo nhiều biến trùng tên (ko nên dùng)
- `let`: biến chỉ có giá trị trong dấu {}, ko thể khai báo nhiều biến trùng tên (nên luôn dùng), an toàn và phạm vi rõ ràng hơn var
- `const`: hằng số, value không đổi

### Data type (8 loại) - trong javascript ko cần khai báo data type
#### Primitive types (nhóm kiểu nguyên thủy)
1. String: có thể dùng nháy đơn '', nháy kép "", hoặc backtick `` (cạnh số 1)
2. Number: Số nguyên, số thực, Infinity (chia cho 0), NaN (not a number) 
3. Boolean: Giá trị logic đúng (true) hoặc sai (false)
4. Undefined
5. Null
6. Symbol
7. Bigint
#### Reference type (nhóm kiểu tham chiếu)
8. Object


### Lệnh check data type: 
`typeof < variable>`

### Comparison operator (toán tử so sánh)
- `>, <
- == (chỉ so sánh value), === (so sánh value + data type), !=, !==, >=, <=>
- Nói thêm 
    + == : Loose Equality - so sánh sau khi chuyển đổi kiểu (type coercion)
    + ===: Strict Equality (nên dùng) - không chuyển đổi kiểu

### Logical operator (Toán tử logic): dùng để kết hợp nhiều điều kiện và trả về boolean
- `&& (AND)`: trả về đúng nếu cả 2 vế của mệnh đề đúng
- `|| (OR)`: trả về đúng nếu một trong 2 vế của mệnh đề đúng


### Unary operator (toán tử một ngôi)
- Dùng để tăng hoặc giảm giá trị
- Chỉ cần một toán hạng để thực hiện.
- 2 loại Prefix và postfix
- Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
    + ++x;
    + --x;
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
    + x++;
    + x--;

- i++ // i = i+1
- i-- // i = i-1
- i+=2 // i = i+2

### Arithmetic operator (toán tử số học)
- +, -, *, /
- % (toán tử chia dư)
- Example: 
    - 1 % 2 = 1
    - 3 % 3 = 0
    - 3 % 2 = 1d
    - 100 % 80 = 20

### Nối chuỗi: 
- `const str1 = “Hello”;`
- `const str2 = “Playwright Viet Nam”`
- `console.log(str1 + str2); // HelloPlaywright Viet Nam`

### Conditional 
```typescript
if (<điều kiện>) { // code }
```
- if lồng if thì gọi là nested condition -> hell condition (không nên dùng, thay bằng &&)

### Loops
```typescript
for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng/giảm>) { // code }
```


### Xuất kết quả ra màn hình:
`console.log("string" + variableName) `

or 

`console.log("string",  variableName) `

### Format code
- Window: *Alt + Shift + F*
- Mac: *Option + Shift + F*

