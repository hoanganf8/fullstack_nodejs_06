import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({}); //Chứa dữ liệu các field trong form
  const [errors, setErrors] = useState({});
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const errorBag = {};
    if (!email) {
      errorBag.email = "Email bắt buộc phải nhập";
    }
    if (!password) {
      errorBag.password = "Mật khẩu bắt buộc phải nhập";
    }
    setErrors(errorBag);
    setForm({
      email: "",
      password: "",
    });
  };
  const handleChangeValue = (e) => {
    // console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form className="w-50 mx-auto py-3" onSubmit={handleSubmitForm}>
      <h2 className="text-center">Login</h2>
      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Email..."
          onChange={handleChangeValue}
          value={form.email}
        />
        {errors.email && (
          <span className="invalid-feedback">{errors.email}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Password..."
          onChange={handleChangeValue}
          value={form.password}
        />
        {errors.password && (
          <span className="invalid-feedback">{errors.password}</span>
        )}
      </div>
      <div className="d-grid">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}
