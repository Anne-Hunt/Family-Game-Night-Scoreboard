import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

import { Player } from './models/PlayerModel.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/PlayerModel.js').Player[]} */
  examples = []

  players = [
    new Player("Anne", 0, "🦝"),
    new Player("Austin", 0, "🐻"),
    new Player("Gus", 0, "🐼"),
    new Player("Bruce", 0, "🦖")
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())