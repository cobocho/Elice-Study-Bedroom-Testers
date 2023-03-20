import Bubble from "./components/Bubble.js";
import $ from "./Utils.js";

export default class LandingController {
  constructor() {
    console.log("LandingController");
    this.addBubbles(70);
    this.changeToTestPage();
  }
  addBubbles(amount) {
    const $inner = $(".inner");
    for (let i = 0; i < amount; i++) {
      new Bubble($inner, "span");
    }
  }
  changeToTestPage() {
    const $startBtn = $(".start-btn");
    $startBtn.addEventListener("click", () => {
      console.log("start");
      this.removeLandingPage();
    });
  }
  removeLandingPage() {
    const $inner = $(".inner");
    const $beer = $("section.beer-wrapper");
    const $startBtnWrapper = $(".start-btn-wrapper");
    const $title = $(".title");

    $inner.style.opacity = 0;
    $title.style.opacity = 0;
    $beer.style.transform = "translateY(100%)";

    setTimeout(() => {
      $title.remove();
      $startBtnWrapper.remove();
    }, 1500);
  }
}
