import { AppState } from "../AppState.js";
import { Player } from "../models/PlayerModel.js";

class PlayersService {
  increaseScore(playerName) {
    let playerToIncrease = AppState.players.find(player => player.name == playerName)
    playerToIncrease.score++
  }

  decreaseScore(playerName) {
    let playerToDecrease = AppState.players.find(player => player.name == playerName)
    playerToDecrease.score--

  }

  addPlayer(name) {
    console.log('servicing', name)
    const playerToAdd = new Player(name, 0)
    AppState.players.push(playerToAdd)
  }
}

export const playersService = new PlayersService()