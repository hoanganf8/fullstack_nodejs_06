//Scroll Event
/*
- Sự kiện scroll: Lắng nghe hành động kéo thanh cuộn của người dùng
- window.scrollY: Lấy vị trí scroll theo trục Y
- window.scrollX: Lấy vị trí scroll theo trục X
*/

// window.addEventListener("scroll", function (e) {
//   //   console.log("Scrolling...");
//   const position = window.scrollY;
//   console.log(position);
// });

// const goBtn = document.querySelector(".go-btn");
// goBtn.addEventListener("click", function () {
//   window.scroll({
//     top: 500,
//     behavior: "smooth",
//   });
// });

//Backtotop
var topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  const position = window.scrollY;
  if (position >= 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
topBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
