/* 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. 
Gọi hàm với 2 cặp giá trị khác nhau. */
function multiply(a, b) {
    console.log(`Muliply of ${a} and ${b}: ${a*b}`);
}
multiply(1,5);
multiply(9,10);

/* 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. 
Gọi hàm và in kết quả với 2 bộ số khác nhau. */
function findMin(a, b, c) {
    let min = a;
    if(a > b) {
        min = b;
        if(b > c) {
            min = c;
         }
    }
    console.log('Min number', min)
}
findMin(10, 5, 7);
findMin(11, 20, 3);
findMin(0, 9, 5);

/* 3. Viết hàm getTopStudents nhận 2 tham số:
- students: mảng các object, mỗi object chứa name (tên) và score (điểm).
- threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả. */
getTopStudents(students, threshold) {
    
}
const students = [{name: 'Ronaldo', score: 89}]

/* 4. Viết hàm calculateInterest nhận 3 tham số:
- principal: số tiền gửi ban đầu (số).
- rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
- years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, 
sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100. 
Gọi hàm với ví dụ thực tế và in kết quả. */