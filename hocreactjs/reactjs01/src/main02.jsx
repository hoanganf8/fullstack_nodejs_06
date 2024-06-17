import React from "react";
import ReactDOM from "react-dom/client";
const root = document.querySelector("#root");

//JSX = JavaScript + XML ==> Viết XML trong JS

//Quá trình biên dịch JSX của React

// JSX ==> Javascript Compiler (Babel, SWC) ==> React Element ==> Node Element ==> DOM Browser
const title = "Học lập trình không khó";
const list = Array.from(
  Array(100)
    .keys()
    .map((value) => {
      return <li key={value}>Item {value + 1}</li>;
    })
);
const ul = <ul className="menu">{list}</ul>;
const getProduct = () => {
  return <h2>Sản phẩm demo</h2>;
};
const Product = () => {
  return <h2>Sản phẩm demo 2</h2>;
};
class Post extends React.Component {
  render() {
    return <h2>Bài viết mới</h2>;
  }
}
const element = (
  <div>
    <h1 id="title" className="title">
      {title}
    </h1>
    <h2 style={{ color: "red" }}>Học React còn dễ hơn</h2>
    {getProduct()}
    <Product />
    <Product></Product>
    <Post />
    {ul}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
      consequatur? Animi, nemo corrupti a, laborum incidunt fuga eum facilis
      doloribus in vitae maiores pariatur sequi officia, est aperiam assumenda
      dolorum?
    </p>
  </div>
);
ReactDOM.createRoot(root).render(element);
