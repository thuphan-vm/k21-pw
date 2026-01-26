/* 
Bài 1: In bảng cửu chương từ 2 đến 5
Viết chương trình in bảng cửu chương từ 2 đến 5, mỗi bảng nhân từ 1 đến 10.
Kết quả mong muốn:
Bảng 2:
2 x 1 = 2
2 x 2 = 4
...
Bảng 3:
3 x 1 = 3
... 
*/
for (let i = 2; i <= 5; i++) {
    console.log(`Bảng ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
console.log('________________________');
/* 
Bài 2: Đếm từ 1 đến 20 theo hàng
In các số từ 1 đến 20, mỗi hàng có 5 số.
Kết quả mong muốn:
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20 
*/
let num = 1;
const rows = 4;
const numPerRow = 5;
for (let i = 1; i <= rows; i++) { // 4 dòng
    let str = ""; // reset chuỗi
    for (let j = 1; j <= numPerRow; j++) { // mỗi dòng 5 số
        str = str + num + " "; // cộng chuỗi: thành 1 dòng gồm 5 số cách nhau bởi khoảng trắng
        num++; // tăng số 
    }
    console.log(str); // in chuỗi gồm 5 số
}
console.log('________________________');

/* 
Bài 3: In hình tam giác số
In hình tam giác với các số tăng dần.
Kết quả mong muốn:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let triangleStr = "";
for (let i = 1; i <= 5; i++) {
    triangleStr = "";
    for (let j = 1; j <= i; j++) {
        triangleStr = triangleStr + j + " ";
    }
    console.log(triangleStr);
}
console.log('________________________');

/* 
Bài 4: In hình chữ nhật rỗng
In hình chữ nhật 5x8, chỉ có viền, bên trong là khoảng trắng.
Kết quả mong muốn:
* * * * * * * *
*             *
*             *
*             *
* * * * * * * *

*/
let rectangleRow = 5;
let rectangleCol = 8
let rectangleStr = "";

for (let i = 1; i <= rectangleRow; i++) {
    rectangleStr = "";
    for (let j = 1; j <= rectangleCol; j++) {
        // Kiểm tra vị trí hàng/cột đầu/cuối để in * hoặc khoảng trắng
        if (i === 1 || i === rectangleRow || j === 1 || j === rectangleCol) {
            rectangleStr = rectangleStr + "* ";
        } else {
            rectangleStr = rectangleStr + "  ";
        }
    }
    console.log(rectangleStr);
}

console.log('________________________');

/* 
Bài 5: Tìm tất cả các cặp số có tổng bằng 10
Cho mảng: [2, 4, 6, 8, 3, 7, 5, 1]
Tìm tất cả các cặp số có tổng = 10 (không trùng lặp).
Kết quả mong muốn:
2 + 8 = 10
4 + 6 = 10
3 + 7 = 10
*/

const arr = [2, 4, 6, 8, 3, 7, 5, 1];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let num1 = arr[i];
        let num2 = arr[j];
        if (j > i && num1 + num2 === 10) { // j always greater than i (no need j>i)
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
        }
    }
}

console.log('________________________');

/* 
Bài 6: In tam giác số ngược
In hình tam giác với số giảm dần.
Kết quả mong muốn:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1 
*/

let triangleReverseStr = "";
for (let i = 5; i >= 1; i--) {
    triangleReverseStr = "";
    for (let j = 1; j <= i; j++) {
        triangleReverseStr = triangleReverseStr + j + " ";
    }
    console.log(triangleReverseStr);
}

console.log('________________________');

/* 
Bài 7: In lịch tháng đơn giản
In lịch một tháng có 30 ngày, mỗi tuần 7 ngày (bắt đầu từ thứ 2).
Kết quả mong muốn:
Tuần 1: 1 2 3 4 5 6 7
Tuần 2: 8 9 10 11 12 13 14
Tuần 3: 15 16 17 18 19 20 21
Tuần 4: 22 23 24 25 26 27 28
Tuần 5: 29 30 
*/
let date = 1;
const maxDate = 30;
const dayPerWeek = 7;
const weekPerMonth = Math.ceil(30 / 7);

for (let i = 1; i <= weekPerMonth; i++) {
    let str = "";
    for (let j = 1; j <= dayPerWeek; j++) {
        if (date <= maxDate) {
            str = str + date + " ";
            date++;
        }
    }
    console.log(`Tuần ${i}: ${str}`); // in chuỗi gồm 5 số
}

console.log('________________________');


/* 
Bài 8: In hình tam giác dấu sao đều
In hình tam giác sao cân đối (có khoảng trắng ở đầu).
Kết quả mong muốn:
     *
    ***
   *****
  *******
 *********
*/
let height = 5;
let tamGiacCan = "";

for (let i = 1; i <= height; i++) {
    tamGiacCan = "";
    // xét 1 dòng: (height + i - 1) = số ký tự từ bìa đến * cuối cùng.
    // Row1: 5 ký tự. Row2: 6 ký tự. Row3: 7 ký tự. Row4: 8 ký tự. Row5: 9 ký tự
    for (let j = 1; j <= height + i - 1; j++) {
        if (j <= height - i) {
            tamGiacCan = tamGiacCan + " ";
        } else {
            tamGiacCan = tamGiacCan + "*";
        }

    }
    console.log(tamGiacCan);
}

console.log('________________________');

/* 
Bài 9: Tính tổng các số chia hết cho 3 và 5
In tất cả các số từ 1 đến 100 chia hết cho cả 3 và 5, hiển thị dạng bảng 5 cột.
Kết quả mong muốn:
15 30 45 60 75
90
Tổng =  
*/

// 1st way
console.log("1st way:");

let numberArr = [];
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        numberArr.push(i);
    }
}
const maxCol = 5;
const maxRow = Math.ceil(numberArr.length / maxCol);
let index = 0;
let output = "";
let total = 0;

for (let row = 1; row <= maxRow; row++) {
    output = "";
    for (let col = 1; col <= maxCol; col++) {
        if (index < numberArr.length) {
            total +=numberArr[index];
            output = output + numberArr[index] + " ";
            index++;           
        }

    }
    console.log(output);
}
console.log(`Tổng = ${total}`);



// 2st way
console.log("2nd way:");

let total2 = 0;
let count = 0; // đếm số chia hết cho 3 & 5
let output2 = "";

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        total2 += i;
        output2 = output2 + i + " ";
        count++;
        // đủ 5 cột thì xuống dòng
        if (count % 5 === 0) {
            console.log(output2);
            output2 = "";
        }
    }
}
// xuất dòng còn lại nếu str <> "" (count<5)
if (output2 !== "") {
    console.log(output2);
}
console.log(`Tổng = ${total2}`);

console.log('________________________');

/* 
Bài 10: In hình kim cương bằng dấu sao
In hình kim cương bằng dấu *, cao 7 hàng.
Kết quả mong muốn:
   *
  ***
 *****
*******
 *****
  ***
   *
*/

const diamndHeight = 7;
const mid = Math.floor(diamndHeight / 2);
let diamndStr = "";

// Nửa trên (tăng)
for (let i = 0; i <= mid; i++) {
    diamndStr = "";
    // khoảng trắng đầu dòng
    for (let j = 0; j < mid - i; j++) {
        diamndStr += " ";
    }
    // dấu *
    for (let j = 0; j < 2 * i + 1; j++) {
        diamndStr += "*";
    }
    console.log(diamndStr);
}

// Nửa dưới (giảm)
for (let i = mid - 1; i >= 0; i--) {
    diamndStr = "";

    // khoảng trắng đầu dòng
    for (let j = 0; j < mid - i; j++) {
        diamndStr += " ";
    }

    // dấu *
    for (let j = 0; j < 2 * i + 1; j++) {
        diamndStr += "*";
    }

    console.log(diamndStr);
}
