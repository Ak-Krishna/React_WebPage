let sideNavBtn = document.getElementById("sideNavBtn");
let sideNav = document.getElementById("sideNav");

sideNavBtn.addEventListener("click", (e) => {
  sideNav.classList.toggle("openSideNav");
  sideNavBtn.classList.toggle("closeNavBtn");
});
