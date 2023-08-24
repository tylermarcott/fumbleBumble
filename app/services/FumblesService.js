import { AppState } from "../AppState.js"



class FumblesService {


  setActive(fumbleId) {

    console.log('In fumble service')
    let foundFumble = AppState.Fumbles.find(f => f.id == fumbleId)
    AppState.activeFumble = foundFumble
    console.log(foundFumble)
  }
}

export const fumblesService = new FumblesService()