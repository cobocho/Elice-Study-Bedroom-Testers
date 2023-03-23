import LandingController from "./LandingController.js";
import TestController from "./TestController.js";
import { $ } from "./Utils.js";

class App {
  constructor() {
    this.landingController = new LandingController();
    this.testController = new TestController(this.state);
    this.init();
  }
  init() {
    const $startBtn = $(".start-btn");
    $startBtn.addEventListener("click", () => {
      this.turnToTestPage();
    });
    this.landingController.addBubbles(70);
  }
  turnToTestPage() {
    this.landingController.removeLandingPage();
    this.testController.setFirstTest();
  }
}

const app = new App();

export default app;
