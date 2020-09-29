// Look for .hamburger
const hamburger = document.getElementById("iconHamburger"),
  menu = document.getElementById('menu'),
  body = document.getElementById('body'),
  links = document.querySelectorAll('.nav__link')

// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  body.classList.toggle("no-scroll")
  menu.classList.toggle("open");

  console.log('mano qlq');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove("is-active");
    body.classList.remove("no-scroll")
    menu.classList.remove("open");
  })
})
