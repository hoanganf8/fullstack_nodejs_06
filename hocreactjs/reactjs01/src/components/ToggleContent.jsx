import { useState } from "react";

const users = [
  {
    id: 1,
    name: "User 1",
    content: "Mô tả User 1",
  },
  {
    id: 2,
    name: "User 2",
    content: "Mô tả User 2",
  },
  {
    id: 3,
    name: "User 3",
    content: "Mô tả User 3",
  },
];

export default function ToggleContent() {
  const [idShow, setIdShow] = useState(null);
  const handleToggle = (id) => {
    setIdShow((idShow) => {
      return idShow === id ? null : id;
    });
  };
  return (
    <div>
      <ul>
        {users.map(({ id, name, content }) => (
          <li key={id}>
            {name}{" "}
            <button onClick={() => handleToggle(id)}>
              {id === idShow ? "Đóng" : "Mở"}
            </button>
            {id === idShow && <div>{content}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
