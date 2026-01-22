/* 1. Tính tổng từ 1 đến 100. */
let sum100Num = 0
for (let i = 1; i <= 100; i++) {
    sum100Num += i;
}
console.log(`Sum from 1 to 100: ${sum100Num}`)


/* 2. In bảng cửu chương từ 2 đến 9. */
for (let i = 2; i <= 9; i++) {
    console.log(`Bang Cuu Chuong ${i}`)
    for (let j = 1; j <= 10; j++) {
        let multipleResult = i * j
        console.log(`${i} * ${j} = ${multipleResult}`);
    }
    console.log("--------------")
}

/* 3. Tạo một mảng chứa các số lẻ từ 1 đến 99. */
const oddNum = [];
for (let i = 1; i <= 99; i += 2) {
    oddNum.push(i)
}
console.log(oddNum);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự 
(ví dụ: user1@example.com, user2@example.com, ..., user10@example.com). */
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho 
và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100} */
const arrayIncome = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 200 },
    { "month": 3, "total": 300 },
    { "month": 4, "total": 400 },
    { "month": 5, "total": 500 },
    { "month": 6, "total": 100 },
    { "month": 7, "total": 100 },
    { "month": 8, "total": 100 },
    { "month": 9, "total": 100 },
    { "month": 10, "total": 100 },
    { "month": 11, "total": 100 },
    { "month": 12, "total": 100 },
]

function totalIncome(arr) {
    let totalIncome = 0;
    for (let i = 0; i < arr.length; i++) {
        totalIncome += arr[i].total
    }
    return totalIncome;
}
let output = totalIncome(arrayIncome);
console.log(output);