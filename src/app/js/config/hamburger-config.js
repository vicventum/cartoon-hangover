import {
  root,
  header,
  hamburger,
  links,
} from "../utilities/variables"

// On click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active")
  root.classList.toggle("no-scroll")
  header.classList.toggle("open")
})

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove("is-active")
    root.classList.remove("no-scroll")
    header.classList.remove("open")
  })
})