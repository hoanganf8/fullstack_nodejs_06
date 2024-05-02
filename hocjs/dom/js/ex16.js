/*
Web Component: Kỹ thuật tách các thành phần thành các thẻ html riêng biệt để thuận tiện trong việc tái sử dụng
*/
// console.dir(HTMLElement);
// var h1 = document.createElement("h1");
// console.dir(h1);
//HTMLHeadingElement --> HTMLElement ->  Element --> Node --> EventTarget
// h1.addEventListener('');
// HTMLDivElement.prototype.css = function (input = {}) {
//   Object.assign(this.style, input);
// };

// document.querySelector(".content").css({
//   color: "red",
// });

//Các bước để tạo ra 1 component

//B1. Tạo ra 1 constructor / class kế thừa từ HTMLElement

//B2. Đưa constructor vào phương thức customElement.define()

// class HelloWorld extends HTMLElement {
//   static observedAttributes = ["data-id"];
//   connectedCallback() {
//     console.log("Component được đưa vào DOM");
//     var _this = this;
//     this.innerHTML = "<h1>Học lập trình không khó</h1>";
//     this.querySelector("h1").addEventListener("click", function () {
//       _this.setAttribute("data-id", Math.random());
//     });
//   }
//   disconnectedCallback() {
//     console.log("Component được loại bỏ khỏi DOM");
//   }
//   attributeChangedCallback(name, oldValue, newValue) {
//     //Khi thuộc tính thay đổi
//     console.log("Thuộc tính thay đổi");
//     console.log(name, oldValue, newValue);
//   }
// }
// customElements.define("hello-world", HelloWorld);

// var helloWorldEl = document.createElement("hello-world");
// var btn = document.querySelector("button");
// var isShow = false;
// btn.addEventListener("click", function () {
//   if (!isShow) {
//     document.body.append(helloWorldEl);
//     isShow = true;
//   } else {
//     helloWorldEl.remove();
//     isShow = false;
//   }
// });

customElements.define(
  "todo-app",
  class extends HTMLElement {
    connectedCallback() {
      var shadow = this.attachShadow({
        mode: "open",
      });
      this.render(shadow);
      this.initialStyle(shadow);
      this.addEvent();
    }
    render(shadow) {
      var html = `
      <div class="todo-app">
        <ul>
            <li>Công việc 1</li>
            <li>Công việc 2</li>
            <li>Công việc 3</li>
        </ul>
        <input type="text" placeholder="Tên..."/>
        <button>Thêm</button>
      </div>
      `;
      shadow.innerHTML = this.innerHTML + html;
    }
    initialStyle(shadow) {
      var style = document.createElement("style");
      style.textContent = `
      .todo-app {
        background: ${this.dataset.bg};
        padding: 15px;
      }
      `;
      shadow.append(style);
    }
    addEvent() {
      var _this = this;
      var btn = _this.querySelector("button");
      btn.addEventListener("click", function () {
        _this.handleAdd(_this);
      });
    }
    handleAdd(_this) {
      var ul = _this.querySelector("ul");
      var input = _this.querySelector("input");
      var value = input.value;
      if (!value) {
        alert("Vui lòng nhập tên công việc");
        return;
      }
      var li = document.createElement("li");
      li.innerText = value;
      ul.append(li);
      input.value = "";
    }
  }
);

//Shadow DOM:

//Document ==> Host (Element) ==> Root ==> Content

// var content = document.querySelector(".content");
// var shadow = content.attachShadow({
//   mode: "open",
// });
// shadow.innerHTML = content.innerHTML;
// content.innerText = "";
// var h1 = document.createElement("h1");
// h1.innerText = "Học lập trình không khó";
// shadow.prepend(h1);
// var style = document.createElement("style");
// style.textContent = `
// h1 {
//     color: red;
// }
// `;
// shadow.append(style);
