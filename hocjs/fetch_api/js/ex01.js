const serverApi = `http://localhost:3000`;

//fetch()

// fetch(`${serverApi}/users`)
//   .then((response) => {
//     console.log(response);
//     //response.json() ==> Trả về dữ liệu từ SERVER (Điều kiện: Dữ liệu trên server phải là JSON)
//     //response.text() ==> Trả về dữ liệu gốc của Server
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//Chuyển đoạn code trên thành async await
const renderUsers = (users) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = `${users
    .map(
      ({ name, email }, index) => `
  <tr>
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
  </tr>
  `
    )
    .join("")}`;
};
const getUsers = async () => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();
  renderUsers(users);
};
getUsers();

//Hàm gửi dữ liệu lên server (Thêm)
const addUser = async (data) => {
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    getUsers();
  } else {
    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
  }
};
//Xử lý form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries([...new FormData(e.target)]);
  addUser(data);
  form.reset(); //Xóa hết dữ liệu trong form
});

//Lấy dữ liệu từ form ==> Call API để đẩy dữ liệu lên server ==> Render dữ liệu mới
