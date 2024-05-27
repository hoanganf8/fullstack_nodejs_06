import { config } from "./config.js";
import { httpClient } from "./client.js";
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
const handleLogout = () => {
  //Call API
  localStorage.removeItem("login_token");
  render();
};
const getRefreshToken = async (refreshToken) => {
  try {
    const response = await fetch(`${SERVER_AUTH_API}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error("Refresh Token không hợp lệ");
    }
    const tokens = response.json();
    return tokens;
  } catch {
    return false;
  }
};
const getProfile = async () => {
  try {
    //Lấy token trong localStorage
    if (localStorage.getItem("login_token")) {
      const { access_token: accessToken, refresh_token: refreshToken } =
        JSON.parse(localStorage.getItem("login_token"));

      httpClient.token = accessToken;
      const { response, data: user } = await httpClient.get(
        `${SERVER_AUTH_API}/auth/profile`
      );
      if (!response.ok) {
        const newTokens = await getRefreshToken(refreshToken);
        if (!newTokens) {
          throw new Error("Token không hợp lệ");
        }
        localStorage.setItem("login_token", JSON.stringify(newTokens));
        getProfile();
      } else {
        const nameEl = document.querySelector(".profile .name");
        nameEl.innerText = user.name;
      }
    }
  } catch {
    handleLogout();
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

root.addEventListener("click", (e) => {
  if (e.target.classList.contains("logout")) {
    e.preventDefault();
    handleLogout();
  }
});

const handleLogin = async (form) => {
  const buttonBtn = form.querySelector("button");
  const data = Object.fromEntries(new FormData(form));
  buttonBtn.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  Loading`;
  buttonBtn.disabled = true;
  // const response = await fetch(`${SERVER_AUTH_API}/auth/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  const { response, data: tokens } = await httpClient.post(
    `${SERVER_AUTH_API}/auth/login`,
    data
  );
  buttonBtn.innerText = "Đăng nhập";
  buttonBtn.disabled = false;
  if (!response.ok) {
    //Thông báo lỗi
    root.querySelector(".msg").innerHTML = getMessage(
      "Email hoặc mật khẩu không chính xác"
    );
    return;
  }
  // const tokens = await response.json();
  //Lưu token vào bộ nhớ trình duyệt: localStorage, sessionStorage, cookie
  localStorage.setItem("login_token", JSON.stringify(tokens));
  //Gọi lại render để update giao diện
  render();
};

/*
Chức năng đăng xuất

- Call API /logout ==> Backend thêm accessToken vào Blacklist ở BackEnd
- Xóa localStorage: localStorage.removeItem('login_token');
*/

//Xử lý token bị expired (Áp dụng với nhiều request trên 1 trang)
/*
Request 1 => Success
Request 2 => Token Expired => Failed => Refresh Token => Gọi lại Request 2
Request 3 => Token Expired => Failed => Refresh Token => Gọi lại Request 3
*/

const requestRefresh = () => {
  // console.log("Request Refresh");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("new token:" + Math.random());
    }, 1000);
  });
};

// let isExpired = false;
// let token = "My Token";
// let refreshTokenPromise = null;
// const requestApi = (url) => {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       //Giả sử  khi gọi api /courses => token bị hết hạn
//       if (url === "/courses") {
//         isExpired = true;
//       }
//       if (isExpired) {
//         // console.log("Token expired");
//         if (!refreshTokenPromise) {
//           refreshTokenPromise = requestRefresh();
//         }
//         const newToken = await refreshTokenPromise;
//         token = newToken;
//       }

//       console.log("Call API: ", url, "Token: ", token);
//     }, 1000);
//   });
// };

// requestApi("/profile");
// requestApi("/courses");
// requestApi("/posts");
// requestApi("/products");
