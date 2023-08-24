import { AppState } from "../AppState.js"



class FumblesService {


  setActive(fumbleId) {

    console.log('In fumble service')
    let foundFumble = AppState.Fumbles.find(f => f.id == fumbleId)
    AppState.activeFumble = foundFumble
    console.log(foundFumble)
  }

  checkForm(fumbleBody) {
    console.log(fumbleBody)
    console.log(AppState.activeFumble.body)


    if (fumbleBody == AppState.activeFumble.body) {
      console.log('WINNERrR')
    } else {
      console.log('LOSERRRR')
    }
  }


  startGame() {
    AppState.
      Date.now()
  }

  endGame() {
    return Date.now()
  }

  calculateTime() {
    let totalTime = (this.endGame - this.startGame)
    console.log(totalTime)
  }

}

export const fumblesService = new FumblesService()