import {
  root,
  header,
  hamburger,
  links,
  menu
} from "../js/utilities/variables";

// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  root.classList.toggle("no-scroll")
  // menu.classList.toggle("open");
  header.classList.toggle("open");

  console.log('mano qlq');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove("is-active");
    root.classList.remove("no-scroll")
    menu.classList.remove("open");
  })
})