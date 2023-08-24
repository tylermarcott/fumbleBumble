import { AppState } from "../AppState.js";
import { Fumble } from "../models/Fumble.js";
import { fumblesService } from "../services/FumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



function _drawFumbles() {
  console.log('hello')
  let fumbles = AppState.Fumbles
  let content = ''
  fumbles.forEach(f => content += f.ListTemplate)
  setHTML('fumble-list', content)
  console.log(content)
}

function _drawActiveFumble() {
  console.log('drawing active fumlino')
  console.log(AppState.activeFumble)

  let active = AppState.activeFumble

  setHTML('active-fumble', active.ActiveTemplate)
}



export class FumbleController {

  constructor() {
    _drawFumbles()
    AppState.on('activeFumble', _drawActiveFumble)


  }

  setActive(fumbleId) {
    // console
    //   .log('setting active')
    fumblesService.setActive(fumbleId)

  }

  checkForm() {
    window.event.preventDefault()
    let textAreaElem = document.querySelector('textarea')
    console.log(textAreaElem)

  }

}