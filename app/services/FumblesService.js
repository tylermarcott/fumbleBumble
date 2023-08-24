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


  // FIXME: trying to mess around with this syntax and get a function that output the length of time it takes to complete the typing challenge. getting NaN as an ouput for calculateTime() fxn. Look into this.

  startGame() {
    console.log(Date.now())
    return
  }

  endGame() {
    console.log(Date.now())
    return
  }

  calculateTime() {
    let totalTime = (this.endGame - this.startGame)
    console.log(totalTime)
  }

}

export const fumblesService = new FumblesService()