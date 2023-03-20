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
    const $beer = $("section.beer-wrapper");
    const $startBtnWrapper = $(".start-btn-wrapper");
    const $title = $(".title");

    $startBtnWrapper.style.animation = "buttonRemove 1s ease forwards";
    $title.style.animation = "titleRemove 1s ease forwards";

    setTimeout(() => {
      $beer.style.transform = "translateY(100%)";
      $title.remove();
      $startBtnWrapper.remove();
    }, 1000);
  }
}
