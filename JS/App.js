import LandingController from "./LandingController.js";
import $ from "./Utils.js";

class App {
  constructor() {
    this.state = {
      seq: 0,
      type: null,
    };
    this.landingController = new LandingController();
    this.init();
  }
  init() {
    const $startBtn = $(".start-btn");
    $startBtn.addEventListener("click", () => {
      this.finishLandingPage();
    });
  }
  finishLandingPage() {
    this.landingController.removeLandingPage();
  }
}

new App();
