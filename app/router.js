import { AboutController } from "./controllers/AboutController.js";
import { FumbleController } from "./controllers/FumbleController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: FumbleController,
    view: /*html*/`

    <div class="container-fluid">
      <section class="row">

        <div class="col-8">
          <h2>Jungle Jumble</h2>
          <div class="row">
            <div class="col-4">Easy Fumble</div>
            <div class="col-4">Fast Time goes here</div>
            <p>model body goes here</p>
          </div>

          <div class="row">
            <p>Form goes here</p>
            <button class="btn btn-button">Submit</button>
          </div>
        </div>

        <div id='fumble-list' class="col-4">
          <h1>Fumbles</h1>
          <span>
            <button class="btn btn-button">Start</button>
            <p>other stuff goes here lol</p>
          </span>
          <span>
            <button class="btn btn-button">Start</button>
            <p>other stuff goes here lol</p>
          </span>
          <span>
            <button class="btn btn-button">Start</button>
            <p>other stuff goes here lol</p>
          </span>


          <div>
            <h4>Create Fumble</h4>
            <form action="nothing-yet"></form>
            <button class="btn btn-button">
              Create
              <i class="mdi mdi-plus"></i></button>
          </div>
        </div>
      </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]