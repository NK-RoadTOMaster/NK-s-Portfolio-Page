let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Java Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",
    "FullStack Web Developer",
    "Java FullStack Developer",
    "Blockchain Developer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1200,
  loop: true,
});
