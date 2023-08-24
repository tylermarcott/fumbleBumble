export class Fumble {
  constructor(data) {
    // this.id = generateId()
    this.name = data.name
    this.body = data.body

    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }


  get ListTemplate() {
    return `
    <h1>Fumbles</h1>
          <span>
            <button class="btn btn-button">Start</button>
            <p>${this.name}</p>
         `
  }
}
