/*
Đệ quy: Gọi lại chính hàm đang định nghĩa --> Tạo thành 1 vòng lặp
- Chỉ áp dụng trong các trường hợp bắt buộc
- Tính đến điều kiện dừng (Khử đệ quy)
- Chú ý thay đổi đối số khi gọi lại
*/

// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

//S = 1 + 2 + ... + N
function sum(n) {
  if (n === 1) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(10));
