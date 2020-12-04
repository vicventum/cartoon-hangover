import {
  rootStyles,
  tabs
} from "./utilities/variables";

let prevItem = null, currentItem = null

tabs.addEventListener('click', e => {
  let item = null
  if (e.target.classList.contains('tabs__item'))
    item = e.target
  else if (e.target.parentElement.classList.contains('tabs__item'))
    item = e.target.parentElement

  console.log(item.children);

  // Guardando el item
  if (item) {
    currentItem = {
      item,
      title: item.children[0],
      panel: item.children[1]
    }
    // Reseteando el item anterior
    if (prevItem !== null && currentItem.item !== prevItem.item) {
      manageClass(false)
      // prevItem.panel.style.maxHeight = 0
    }
    // Desplegando el item actual
    if (currentItem !== null) {
      const maxHeight = currentItem.panel.scrollHeight
      rootStyles.setProperty('--height-panel', `calc(${maxHeight}px + 50px)`)
      toggleClass()
      // manageClass(true)
      prevItem = currentItem
    }
  }
})

function manageClass(mode) {
  if (mode) {
    currentItem.item.classList.add('tabs--show')
    // currentItem.title.classList.add('title-in-hover')
    // currentItem.panel.classList.add('item-in-hover')
  } else {
    prevItem.item.classList.remove('tabs--show')
    // prevItem.title.classList.remove('title-in-hover')
    // prevItem.panel.classList.remove('item-in-hover')
  }
}

function toggleClass() {
  currentItem.item.classList.toggle('tabs--show')
  // currentItem.title.classList.toggle('title-in-hover')
  // currentItem.panel.classList.toggle('item-in-hover')
}