import { AppState } from "../AppState.js";
import { Fumble } from "../models/Fumble.js";
import { setHTML } from "../utils/Writer.js";



function _drawFumbles() {
  console.log('hello')
  let fumbles = AppState.Fumbles
  let content = ''
  fumbles.forEach(f => content += f.ListTemplate)
  setHTML('fumble-list', content)
  console.log(content)
}




export class FumbleController {

  constructor() {
    _drawFumbles()


  }
}