export class Fumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body

    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }


  get ListTemplate() {
    return `<li>${this.name}</li>`
  }
}
