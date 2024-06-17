//Quá trình Render
//JS: Node Element ==> DOM Browser
//React: React Element ==> Thông qua ReactDOM ==> Node Element ==> DOM Browser
import React from "react";
import ReactDOM from "react-dom/client";
const root = document.querySelector("#root");
const h1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    style: { backgroundColor: "gray", padding: "20px" },
    onClick: (e) => {
      console.log("Hello anh em");
      e.target.style.color = "red";
    },
  },
  "Hello anh em F8"
);
const h2 = React.createElement("h2", {}, "Học React không khó");
// const div = React.createElement("div", {}, h1, h2);
const liList = Array(100)
  .keys()
  .map((value) => {
    return React.createElement("li", {}, `Item ${value + 1}`);
  });
const ul = React.createElement("ul", {}, ...liList);
const fragment = React.createElement(React.Fragment, {}, h1, ul, h2);
ReactDOM.createRoot(root).render(fragment);

//Bài tập:
// Tạo thẻ ul và đưa vào trước thẻ h2
// Tạo 100 thẻ li đưa vào trong thẻ ul: Item 1, Item 2, ... Item 100
