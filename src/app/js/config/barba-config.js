import barba from "../../vendor/barba/barba.min"
import barbaCss from "../../vendor/barba/barba-css.umd"

barba.use(barbaCss)

barba.init({
  preventRunning: true,
  transitions: [
      {
        name: 'general',
        sync: true,
        once() {},
        leave() {},
        enter() {},
      },
       {
        name: 'home',
        sync: true,
        to: {
          namespace: ['home']
        },
        once() {},
        leave() {},
        enter() {},
      }
    ]
  })