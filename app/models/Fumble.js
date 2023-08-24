import { generateId } from "../utils/generateId.js"

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
    return `
    <h1>Fumbles</h1>
          <span>
            <button onclick="app.FumbleController.setActive('${this.id}')" class="btn btn-button">Start</button>
            <p>${this.name}</p>
        `
  }


  get ActiveTemplate() {
    return `
        <div class="container-fluid">
      <section class="row">

        <div class="col-8">
          <h2>Fumble Bumble</h2>
          <div class="row">
            <div class="col-4">${this.name}</div>
            <div class="col-4">Fast Time goes here</div>
            <p>${this.body}</p>
          </div>


          <section>
            <form>
              <div class="mb-3">
                <label for="fumble" class="form-label">THE FUMBLE BEGINS</label>
                <textarea class="form-control" id="fumbleSubmit" rows="3"></textarea>
              </div>
              <button onclick="app.FumbleController.checkForm()" type="submit" class="btn btn-primary">Submit</button>
            </form>
          </section>
        </div>
    `
  }


}
