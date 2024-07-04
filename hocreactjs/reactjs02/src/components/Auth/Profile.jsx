import { useSelector } from "../../store/hook";
import Logout from "./Logout";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="py-3">
      <h2>Chào mừng bạn quay trở lại</h2>
      <ul className="list-unstyled d-flex gap-2">
        <li>Chào bạn: {user?.name}</li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
