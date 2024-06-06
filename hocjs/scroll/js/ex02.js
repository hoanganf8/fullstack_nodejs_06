// var nav = document.querySelector("nav");
// var nav1 = document.querySelector(".nav-1");
// var nav2 = document.querySelector(".nav-2");
// var nav3 = document.querySelector(".nav-3");
// var section1 = document.querySelector("#section-1");
// var section2 = document.querySelector("#section-2");
// var section3 = document.querySelector("#section-3");
// var navHeight = nav.clientHeight;
// nav1.addEventListener("click", function () {
//   window.scroll({
//     top: section1.offsetTop - navHeight - 10,
//     behavior: "smooth",
//   });
// });
// nav2.addEventListener("click", function () {
//   window.scroll({
//     top: section2.offsetTop - navHeight - 10,
//     behavior: "smooth",
//   });
// });
// nav3.addEventListener("click", function () {
//   window.scroll({
//     top: section3.offsetTop - navHeight - 10,
//     behavior: "smooth",
//   });
// });
const nav = document.querySelector("nav");
const navHeight = nav.clientHeight;
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    const sectionId = e.target.dataset.target;
    const section = document.querySelector(sectionId);
    window.scroll({
      top: section.offsetTop - navHeight - 10,
      behavior: "smooth",
    });
  });
});

const sectionList = document.querySelectorAll("section");
const sectionPosition = Array.from(sectionList)
  .map((item, index) => {
    return {
      position: item.offsetTop,
      selector: "#" + item.id,
    };
  })
  .reverse();

window.addEventListener("scroll", (e) => {
  const position = window.scrollY;
  const result = sectionPosition.find((item) => {
    return position >= item.position - navHeight - 10;
  });
  if (result) {
    const selector = result.selector;
    const navItemActive = document.querySelector("nav .nav-item.active");
    if (navItemActive) {
      navItemActive.classList.remove("active");
    }
    const navItemSelect = document.querySelector(
      `nav [data-target="${selector}"]`
    );
    if (navItemSelect) {
      navItemSelect.classList.add("active");
    }
  }
});
