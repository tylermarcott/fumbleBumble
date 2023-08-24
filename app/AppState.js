import { Fumble } from "./models/Fumble.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {


  Fumbles = [

    new Fumble({
      name: '🦍 Fumble',
      body: 'Apes go crazy for croutons, craving crappy Burger King tacos for lunch in the morning.'
    }),
    new Fumble({
      name: '🦏 Jumble',
      body: "A Rhino is albino, we are bad at the rhymo, now I can go home and cry mo'."
    }),
    new Fumble({
      name: '🦝 Tumble',
      body: 'Always searching through the trash, nobody is my match, be careful or I might light YOU up with a match'
    })
  ]

  /** @type {import('./models/Fumble.js').Fumble|null */
  activeFumble = null





  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
