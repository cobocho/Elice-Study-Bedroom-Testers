import Bubble from "./components/Bubble.js";
import { $ } from "./Utils.js";

export default class LandingController {
  addBubbles(amount) {
    for (let i = 0; i < amount; i++) {
      new Bubble($(".inner"), "span", null, "bubble");
    }
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
