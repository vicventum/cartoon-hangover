const $id = document.getElementById.bind(document)
const $class = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)

const rootStyles = document.documentElement.style,
  rootStylesGet = window.getComputedStyle(document.documentElement),
  root = $id('root'),
  tabs = $id('tabs')

export {
  $id,
  $class,
  $all,
  rootStyles,
  rootStylesGet,
  root,
  tabs
}