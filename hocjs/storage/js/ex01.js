//Storage: Bộ nhớ trình duyệt
/*
1. localStorage
- Dung lượng lưu trữ lớn (10mb)
- Chỉ lưu trữ được text
- Thời gian lưu trữ không giới hạn
- Chỉ hoạt động phía client (Đọc, ghi do client quyết định)
- Phân biệt qua Origin: scheme + hostname + port
2. sessionStorage
- Dung lượng lưu trữ lớn (10mb)
- Chỉ lưu trữ được text
- Thời gian lưu trữ trong phiên hoạt động của trình duyệt (Tắt trình duyệt là bị xóa)s
- Chỉ hoạt động phía client (Đọc, ghi do client quyết định)
- Phân biệt qua Origin: scheme + hostname + port
3. cookie
- Dung lượng lưu trữ nhỏ (4kb)
- Chỉ lưu trữ là text
- Thời gian lưu trữ linh hoạt: 
+ Theo phiên
+ Thời gian chỉ định
- Hoạt động cả ở client và server
- Phân biệt thông qua path
- Chia sẻ cookie qua các subdomain
*/

if (typeof Storage !== "undefined") {
  console.log("Có hỗ trợ");
  //   localStorage.setItem("username", "hoangan");
  //   console.log(localStorage.getItem("username"));
  //   localStorage.removeItem("username");
  //   localStorage.clear();
  //   sessionStorage.setItem("username", "hoangan.web@gmail.com");
  //   sessionStorage.email = "contact@fullstack.edu.vn";
  //   console.log(sessionStorage.getItem("email"));
}

/*
Cookie: 
HTTP Request ==> Cookie đính kèm Header ==> Server nhận được Cookie qua Header ==> Xử lý các tác vụ

Server muốn Set Cookie ==> Trả về Response Header có tên: Set-Cookie
*/
const expire = new Date("2024-06-13 12:00:00").toUTCString();
// document.cookie = "username=hoangan;expires=" + expire + ";path=/";
// console.log(document.cookie);
document.cookie = "username=;expires=" + new Date().toUTCString() + ";path=/";

fetch(`http://localhost:3000/api/users`, {
  headers: {
    "x-api-key": "123",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
