// import barba from "../../vendor/barba/barba.min"
// import barbaCss from "../../vendor/barba/barba-css.umd"
import activeTabs from "../tabs"
import { $class } from "../utilities/variables"

barba.use(barbaCss)

barba.hooks.beforeOnce(({ next }) => manageLink(next, true))
barba.hooks.beforeEnter(({ next }) => manageLink(next, true))
barba.hooks.beforeLeave(({ current }) => manageLink(current, false))

function manageLink(element, mode) {
  const id = element.url.path
  const activeLink = $class(`[href*='${id.match(/(?!.*\/).*/)[0]}']`)
  
  mode
    ? activeLink.classList.add('u-active') 
    : activeLink.classList.remove('u-active') 
}

barba.init({
  preventRunning: true,
  timeout: 5000,
  // Las 'views' son donde se colocará el código que no tiene que ver con las animaciones, pero que se quiere que se ejecute antes o después de las transiciones de cada página en específico.
  views: [
    // Corrige error de tabs. Vuelve a ejecutar el código correspondiente a las tabs cada vez que se esta a punto de entrar a la pagina faq.html
    {
      namespace: 'faq',
      beforeEnter() {
        activeTabs()
      },
    }
  ],
  transitions: [
    {
      name: 'general',
      sync: true,
      once() { },
      leave() { },
      enter() { },
    },
    {
      name: 'home',
      sync: true,
      to: {
        namespace: ['home']
      },
      once() { },
      leave() { },
      enter() { },
    }
  ]
})