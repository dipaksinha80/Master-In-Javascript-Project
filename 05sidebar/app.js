//sidebar-toggle
//close-btn
//sidebar

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  //   console.log(sideBar.classList); // just to check
  //   if (sideBar.classList.contains("show-sidebar")) {
  //     sideBar.classList.remove("show-sidebar");
  //   } else {
  //     sideBar.classList.add("show-sidebar");
  //   }
  sideBar.classList.toggle("show-sidebar"); // easy way
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
