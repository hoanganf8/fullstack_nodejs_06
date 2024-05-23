import { config } from "./config.js";
const { SERVER_AUTH_API } = config;
const root = document.querySelector("#root");
const loginHtml = `<div class="w-50 mx-auto py-3">
<h2 class="text-center">Đăng nhập</h2>
<div class="msg"></div>
<form action="" class="login">
  <div class="mb-3">
    <label for="">Email</label>
    <input
      type="email"
      class="form-control"
      name="email"
      placeholder="Email..."
      required
    />
  </div>
  <div class="mb-3">
    <label for="">Mật khẩu</label>
    <input
      type="password"
      class="form-control"
      name="password"
      placeholder="Mật khẩu..."
      required
    />
  </div>
  <div class="d-grid">
    <button class="btn btn-primary">Đăng nhập</button>
  </div>
</form>
</div>`;
const profileHtml = `<div class="w-75 mx-auto py-3">
<h2>Chào mừng bạn đã quay trở lại</h2>
<ul class="list-unstyled d-flex gap-3 profile">
  <li>Chào bạn: <span class="name">Loading...</span></li>
  <li><a href="#">Tài khoản</a></li>
  <li><a href="#" class="logout">Đăng xuất</a></li>
</ul>
</div>`;
let isLogin;
const getProfile = async () => {
  //Lấy token trong localStorage
  if (localStorage.getItem("login_token")) {
    const { access_token: accessToken } = JSON.parse(
      localStorage.getItem("login_token")
    );
    const response = await fetch(`${SERVER_AUTH_API}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const user = await response.json();
    const nameEl = document.querySelector(".profile .name");
    nameEl.innerText = user.name;
  }
};
const render = () => {
  isLogin = localStorage.getItem("login_token") ? true : false;
  root.innerHTML = isLogin ? profileHtml : loginHtml;
  getProfile();
};
const getMessage = (msg) => {
  return `<div class="alert alert-danger text-center my-3">${msg}</div>`;
};
render();

root.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("login")) {
    handleLogin(e.target);
  }
});

const handleLogin = async (form) => {
  const buttonBtn = form.querySelector("button");
  const data = Object.fromEntries(new FormData(form));
  buttonBtn.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  Loading`;
  buttonBtn.disabled = true;
  const response = await fetch(`${SERVER_AUTH_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  buttonBtn.innerText = "Đăng nhập";
  buttonBtn.disabled = false;
  if (!response.ok) {
    //Thông báo lỗi
    root.querySelector(".msg").innerHTML = getMessage(
      "Email hoặc mật khẩu không chính xác"
    );
    return;
  }
  const tokens = await response.json();
  //Lưu token vào bộ nhớ trình duyệt: localStorage, sessionStorage, cookie
  localStorage.setItem("login_token", JSON.stringify(tokens));
  //Gọi lại render để update giao diện
  render();
};
