// Look for .hamburger
const hamburger = document.getElementById("iconHamburger"),
  menu = document.getElementById('menu'),
  root = document.getElementById('root'),
  links = document.querySelectorAll('.navbar__links')

console.log(links);

// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  root.classList.toggle("no-scroll")
  menu.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove("is-active");
    root.classList.remove("no-scroll")
    menu.classList.remove("open");
  })
})
