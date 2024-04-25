//Định nghĩa object render
var F8 = {
  createElement: function (name, props = {}, ...children) {
    var element = document.createElement(name);
    Object.keys(props).forEach(function (key) {
      if (key.startsWith("on")) {
        //Sự kiện
        var eventName = key.replace("on", "").toLowerCase().trim();
        element.addEventListener(eventName, props[key]);
      } else {
        element[key] = props[key];
      }
    });
    //children --> Mảng
    if (children.length) {
      children.forEach(function (item) {
        element.append(item);
      });
    }
    return element;
  },
};

var F8DOM = {
  render: function (rootEl, node) {
    rootEl.innerText = "";
    rootEl.append(node);
  },
};
