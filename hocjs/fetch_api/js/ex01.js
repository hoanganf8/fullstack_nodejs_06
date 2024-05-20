import { debounce } from "./utils.js";

const serverApi = `http://localhost:3000`;

//Chuyển đoạn code trên thành async await
const renderUsers = (users) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = `${users
    .map(
      ({ id, name, email }, index) => `
  <tr>
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td><button data-type="edit" data-id="${id}">Sửa</button></td>
    <td><button data-type="delete" data-id="${id}">Xóa</button></td>
  </tr>
  `
    )
    .join("")}`;
};
const paginationEl = document.querySelector(".pagination");
const renderPagination = (totalPage) => {
  let html = "";
  for (let page = 1; page <= totalPage; page++) {
    if (query._page === page) {
      html += `<span>${page}</span> `;
    } else {
      html += `<a href="#">${page}</a> `;
    }
  }
  paginationEl.innerHTML = html;
};
const addEventPagination = () => {
  paginationEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.localName !== "a" && e.target.localName !== "span") {
      return;
    }
    goPage(e.target.innerText);
  });
};
const goPage = (page) => {
  query._page = +page;
  getUsers();
};
const query = {
  _limit: 3,
  _page: 1,
  _sort: "id",
  _order: "desc",
};
const getUsers = async (keyword) => {
  if (keyword) {
    query.q = keyword;
  }
  const searchParams = new URLSearchParams(query).toString(); //Convert object query thành string ở dạng query string
  const response = await fetch(`${serverApi}/users?${searchParams}`);
  const users = await response.json();
  const totalCount = response.headers.get("x-total-count"); //Tổng số bản ghi server trả về
  const totalPage = Math.ceil(totalCount / 3); //Tính số trang = số bản ghi / giới hạn của 1 trang
  renderUsers(users);
  renderPagination(totalPage);
};
getUsers();
addEventPagination();

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
//Hàm cập nhật user lên API
const updateUser = async (data, userId) => {
  const response = await fetch(`${serverApi}/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    getUsers();
    form.removeAttribute("data-id"); //xóa dataset trong form
    form.elements.btn.innerText = "Thêm";
  } else {
    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
  }
};
//Xử lý form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries([...new FormData(e.target)]);
  if (e.target.dataset.id) {
    const userId = e.target.dataset.id;
    updateUser(data, userId);
  } else {
    addUser(data);
  }

  form.reset(); //Xóa hết dữ liệu trong form
});

//Xử lý khi click vào nút sửa
const tbody = document.querySelector("tbody");
tbody.addEventListener("click", (e) => {
  if (e.target.dataset.type === "edit") {
    const userId = e.target.dataset.id;
    getUser(userId);
  }
  if (e.target.dataset.type === "delete") {
    const userId = e.target.dataset.id;
    if (confirm("Bạn có chắc?")) {
      deleteUser(userId);
    }
  }
});

const deleteUser = async (userId) => {
  const response = await fetch(`${serverApi}/users/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    alert("Không xóa được");
    return;
  }
  query._page = 1; //Reset phân trang về trang 1
  getUsers();
};

const getUser = async (userId) => {
  //Call API
  const response = await fetch(`${serverApi}/users/${userId}`);
  if (!response.ok) {
    alert("Không lấy được user");
    return;
  }
  const user = await response.json();
  updateFormData(user);
};

const updateFormData = ({ id, name, email }) => {
  form.elements.name.value = name;
  form.elements.email.value = email;
  form.elements.btn.innerText = "Cập nhật";
  form.dataset.id = id; //có id thì là sửa
};

const keywordEl = document.querySelector(".keyword");
const handleSearch = debounce((e) => {
  const keyword = e.target.value;
  query._page = 1; //Reset page khi tìm kiếm
  //reset sắp xếp
  query._order = "desc";
  sortByEl.value = "latest";
  getUsers(keyword);
}, 500);
keywordEl.addEventListener("input", handleSearch);

const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  const value = e.target.value;
  const order = value === "latest" ? "desc" : "asc";
  query._order = order;
  getUsers();
});

//Lấy dữ liệu từ form ==> Call API để đẩy dữ liệu lên server ==> Render dữ liệu mới

//Yêu cầu làm chức năng sửa
/*
Click vào nút sửa của user tương ứng
- Lấy dữ liệu của user đó => Gọi api GET /users/id
- Fill dữ liệu trả về vào form
- Thay button thêm ==> Cập nhật

Khi submit form
- Lưu dữ liệu lên API: PUT /users/id hoặc PATCH /users/id
- Cập nhật lại UI của table
- Đổi nút cập nhật => thêm
*/

//Về nhà tìm hiểu
//debounce, throttle

//Authentication - Authorization
// - Cookie-based Authentication, Token-based Authentication
// - Stateless, Stateful
// - JWT (JSON Web Token)
// - Call API JWT: https://fakeapi.platzi.com/en/rest/auth-jwt
