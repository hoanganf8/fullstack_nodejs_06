/*
Javascript
- Kiểu dữ liệu nguyên thủy (primitive type)
- Kiểu dữ liệu tham chiếu (reference type)

Các ngôn ngữ khác
- Pass by Value (Tham trị)
- Pass by Reference (Tham chiếu)
*/
var a = ["Hoàng An", 32];

// var b = a; //Sao chép địa chỉ của biến a gán biến b
//Cách sao chép array sang 1 địa chỉ (Sử dụng các phương thức để tạo ra mảng mới)
//1. Shallow copy
// var b = a.slice(0);
// var b = [...a]; //spread operator
//2. Deep Copy
//Chuyển thành json --> Chuyển ngược lại
var b = JSON.parse(JSON.stringify(a));

b[0] = "Hoàng An F8";

console.log(a);
console.log(b);

var a = 10;
var b = a;
b = 20;
console.log(a);
console.log(b);

//Kiểu dữ liệu tham chiếu không so sánh được
var a = [1];
var b = [1];
// console.log(a === b);
console.log(JSON.stringify(a) === JSON.stringify(b));

var getA = function () {};
var getB = function () {};
console.log(getA === getB);
