import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayerService.js"


export class PlayersController {
  constructor() {
    console.log('The ExamplesController has loaded');

    this.drawPlayersHTML()
  }

  drawPlayersHTML() {
    let playersHTML = ''
    AppState.players.forEach(player => playersHTML += `
    <div class="row bg-black text-light justify-content-between">
      <div class="col-7 p-2">
      <h2 class="p-2"><span class="image-circle rounded-circle border border-light fs-2 p-2">${player.emoji}</span>  ${player.name}</h2>
      </div>
      <div class="col-5 d-flex justify-content-end align-items-center">
      <span class="mdi mdi-plus-circle-outline btn btn-circle text-light fs-1" onclick="app.PlayersController.increaseScore('${player.name}')"></span>
      <span class="fs-3 p-2">${player.score}</span>
      <span class="mdi mdi-minus-circle-outline btn btn-circle text-light fs-1" onclick="app.PlayersController.decreaseScore('${player.name}')"></span>
      </div>
      </div>
    </div>`)
    let playersElm = document.getElementById('playersElem')
    playersElm.innerHTML = playersHTML
  }

  increaseScore(playerName) {
    playersService.increaseScore(playerName)
    this.drawPlayersHTML()
  }

  decreaseScore(playerName) {
    playersService.decreaseScore(playerName)
    this.drawPlayersHTML()
  }

  addPlayer(name) {
    event.preventDefault()
    console.log('Adding', name.value)
    playersService.addPlayer(name.value)
    this.drawPlayersHTML()
  }
}