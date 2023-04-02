import LandingController from "./LandingController.js";
import LoadingContoller from "./LoadingContoller.js";
import TestController from "./TestController.js";
import { $ } from "./Utils.js";

class App {
  constructor() {
    this.landingController = new LandingController();
    this.testController = new TestController();
    this.loadingContoller = new LoadingContoller();
    this.init();
  }
  init() {
    const $startBtn = $(".start-btn");
    $startBtn.addEventListener(
      "click",
      () => {
        this.turnToTestPage();
      },
      { once: true }
    );
    this.landingController.addBubbles(40);
  }
  turnToTestPage() {
    this.landingController.removeLandingPage();
    this.testController.setFirstTest();
  }
  turnToResultPage(result) {
    const $beer = $("section.beer-wrapper");
    const $test = $("section.test-wrapper");
    $beer.style.transform = "translateY(100%)";
    $test.style.transform = "translateY(120%)";

    setTimeout(() => {
      $beer.remove();
      $test.remove();
      this.loadingContoller.setLoading();
    }, 1500);
    setTimeout(() => {
      this.loadingContoller.direct(result);
    }, 6000);
  }
}

const app = new App();

export default app;
