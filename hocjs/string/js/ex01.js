/*
Kiểu dữ liệu nguyên thủy
- Number
- Boolean
- Null
- Undefined
- String

Kiểu dữ liệu tham chiếu
- Function
- Object
*/
//Chuỗi: Kiểu dữ liệu nguyên thủy
/*
Number, String, Boolean --> Hoạt động giống như object (Bọc object) --> Để dễ dàng thao tác với các phương thức, thuộc tính xử lý chuỗi

Trong String: Bọc 1 hàm tạo tên String

Các kiểu dữ liệu trong JS đều có hàm tạo

Ví dụ: 
- Chuỗi: String
- Số: Number
- Boolean: Boolean
- Đối tượng: Object
- Mảng: Array
*/
// var fullname = "Hoàng An";
// console.log(fullname, typeof fullname);
// console.log(fullname.length);
console.log(String.prototype);

//1. Lấy độ dài của chuỗi
var fullname = "Hello anh em F8";
// console.log(fullname.length);

//2. Lấy ký tự theo index
var fullname = "Hello anh em F8";
// console.log(fullname.charAt(0));

//3. Lấy mã ASCII của ký tự trong chuỗi
var fullname = "Hello anh em F8";
// console.log(fullname.charCodeAt(0));

//4. Tìm chuỗi con trong chuỗi cha
var fullname = "Hello anh em F8";
// console.log(fullname.includes("F8"));

//5. Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha
var fullname = "Hello anh em F8";
// console.log(fullname.indexOf("F8"));

//6. Tìm vị trí xuất hiện cuối cùng của chuỗi con trong chuỗi cha
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.lastIndexOf("F8"));

//7. Cắt chuỗi theo index
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.slice(0, 10));
// console.log(fullname.slice(10));
// console.log(fullname.slice(-10));

//8. Tách chuỗi thành mảng
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.split(""));

//9. Thay thế chuỗi
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.replace("F8", "F9"));
// console.log(fullname.replace(/F8/g, "F9"));

//10. Thay thế tất cả
var fullname = "Hello anh em F8 Javascript F8";
// console.log(fullname.replaceAll("F8", "F9"));

//11. Chuyển thành chữ thường
var fullname = "Hello anh em F8 Javascript F8";
console.log(fullname.toLowerCase());

//12. Chuyển thành chữ HOA
var fullname = "Hello anh em F8 Javascript F8";
console.log(fullname.toUpperCase());

//13. Loại bỏ khoảng trắng đầu và cuối chuỗi
var fullname = " Hello anh em F8 Javascript F8 ";
// console.log(fullname);
// console.log(fullname.trim());

//14. Loại bỏ khoảng trắng đầu chuỗi
// trimStart()

//15. Loại bỏ khoảng trắng cuối chuỗi
//trimEnd()

// console.log(fullname.repeat(10));

var phone = "038881111175179";
//Lấy 4 số đầu + 4 dấu * + các số còn lại
// 0388****79

var output = phone.slice(0, 4) + "****" + phone.slice(8);
console.log(output);

document.body.innerHTML = `ABC`;
