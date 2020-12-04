function mq(size, func) {  
  const bp = matchMedia(`(max-width: ${size}px)`)
  // Evento al redimencionar
  bp.addListener(func) 
  // Ejecutando cuando cargue por primera vez la página
  func(bp) 
}

// -- Al llamar la funcion
// mq(600, changeSize)
// function changeSize(mql) {
//   mql.matches 
//   ? document.body.style.background = 'red' 
//   : document.body.style.background = 'yellow'
// }

export { mq }