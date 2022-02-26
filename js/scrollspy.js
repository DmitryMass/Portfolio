let section = document.querySelectorAll("section");
let menuLinks = document.querySelectorAll(".nav-link");
let sectionHeight = document.querySelector("section").offsetHeight;
let sectionStartingPointArray = [];
let menuLinksArray = [];

section.forEach((sec) => {
  sectionStartingPointArray.push(sec.offsetTop);
});
menuLinks.forEach((menuLink) => {
  menuLinksArray.push(menuLink);
});
// window.onscroll = () =>
window.addEventListener("scroll", scrollSpy);
function scrollSpy() {
  {
    let downwardScroll = window.scrollY;
    sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
      if (downwardScroll >= sectionStart - sectionHeight / 2) {
        menuLinksArray.forEach((menu) => {
          menu.classList.remove("active");
        });
        menuLinksArray[sectionIndex].classList.add("active");
      }
    });
  }
}
