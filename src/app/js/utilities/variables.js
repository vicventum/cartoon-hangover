export const $id = document.getElementById.bind(document),
  $class = document.querySelector.bind(document),
  $all = document.querySelectorAll.bind(document),
  rootStyles = document.documentElement.style,
  rootStylesGet = window.getComputedStyle(document.documentElement),
  root = document.getElementsByTagName('html')[0],
  tabs = $id('tabs'),
  header = $id('header'),
  hamburger = $id('iconHamburger'),
  links = $all('.header__nav a'),
  menu = $id('menu')

  console.log(links)