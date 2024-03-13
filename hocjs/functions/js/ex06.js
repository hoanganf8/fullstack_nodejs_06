//window: Đối tượng
//Biến trong đối tượng --> Thuộc tính
//Hàm trong đối tượng --> Phương thức

//Cú pháp: tendoituong.tenthuoctinh hoặc tendoituong.tenPhuongThuc()
// var a = 10;
// function getA() {
//   return a;
// }

// console.log(window.a);
// console.log(window.getA());
// window.alert(1);

// window.f8 = {};
// window.f8.getA = function () {
//   return "F8";
// };
// console.log(window.f8.getA());

//Closure
//Hàm có thể truy cập vào các thuộc tính / biến của các phạm vi chứa nó
// var a = 10;
// function something(c) {
//   console.log(a);
//   var b = 20;
//   function display() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   display();
// }
// something("F8");

function display(a) {
  return function (b) {
    return a + b;
  };
}
var result = display("F8");
console.log(result("JS"));

function sum(a) {
  return function (b) {
    return a + b;
  };
}
var add = sum(10);
// console.log(add);
console.log(add(10));
console.log(add(20));
console.log(add(30));

//Thunk

//IIFE
console.log("haha");
(function (text) {
  console.log("Hello anh", text);
})("F8");
