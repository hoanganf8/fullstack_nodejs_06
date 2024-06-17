// import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const handleClick = (e) => {
    console.log("Hello anh em");
    console.log(e);
  };
  const handleRemove = (index, e) => {
    console.log(index);
    console.log(e);
    e.target.style.color = "red";
  };
  const users = ["User 1", "User 2", "User 3"];
  const status = false;
  const product = (
    <>
      <p>Lorem</p>
      <p>F8</p>
    </>
  );
  const user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    age: 32,
  };
  const handleChange = ({ target }) => {
    console.log(target.value);
  };
  return (
    <>
      <Header title="Header 1" {...user} onChange={handleChange}>
        <Footer />
      </Header>
      {/* <Header title="Header 2" /> */}
      {product}
      {status ? (
        <h1>Học React rất dễ</h1>
      ) : (
        <>
          <h2>Học React rất khó</h2>
          <h2>Học React rất khó</h2>
        </>
      )}
      {users.map((user, index) => (
        <h2 key={index}>
          {user}{" "}
          <button onClick={(event) => handleRemove(index, event)}>
            Remove
          </button>
        </h2>
      ))}
      <button onClick={handleClick}>Click me</button>
      <Footer />
    </>
  );
}
