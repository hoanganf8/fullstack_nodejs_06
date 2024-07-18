import { createSearchParams, useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/thank-you",
      search: createSearchParams({
        id: "ahihi",
        name: "123",
      }).toString(),
    });
  };
  return (
    <div>
      <h1>Contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên" />
        <button>Submit</button>
      </form>
    </div>
  );
}
