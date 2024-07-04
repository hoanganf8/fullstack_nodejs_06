import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { useDispatch, useSelector } from "../../store/hook";
import Profile from "./Profile";
import { useEffect } from "react";
export default function Auth() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("login_token")) {
      dispatch({
        type: "auth/set_user",
        payload: {},
      });
    }
  }, [isAuthenticated]);
  return (
    <div className="container">{isAuthenticated ? <Profile /> : <Login />}</div>
  );
}
