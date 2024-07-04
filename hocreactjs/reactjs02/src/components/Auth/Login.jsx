import { useForm } from "react-hook-form";
import { loginRequest } from "../../utils/loginRequest";
import { useState } from "react";
import { useDispatch } from "../../store/hook";
export default function Login() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    setStatus("pending");
    const tokens = await loginRequest(email, password);
    setStatus(null);
    if (!tokens) {
      setMsg("Email hoặc password không đúng");
    } else {
      localStorage.setItem("login_token", JSON.stringify(tokens));
      dispatch({ type: "auth/set_user" });
    }
  };

  return (
    <form className="w-50 mx-auto py-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Login</h2>
      {msg && <div className="alert alert-danger">{msg}</div>}
      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Email..."
          {...register("email", {
            required: {
              value: true,
              message: "Vui lòng nhập email",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "Email không đúng định dạng",
            },
          })}
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password..."
          {...register("password", {
            required: {
              value: true,
              message: "Vui lòng nhập mật khẩu",
            },
            minLength: {
              value: 6,
              message: "Vui lòng nhập mật khẩu từ 6 ký tự trở lên",
            },
          })}
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
      </div>
      <div className="d-grid">
        <button className="btn btn-primary" disabled={status === "pending"}>
          {status === "pending" ? "Đang xử lý..." : "Đăng nhập"}
        </button>
      </div>
    </form>
  );
}
