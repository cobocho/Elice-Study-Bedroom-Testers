import $ from "./utils.js";

const $inner = $(".inner");

class Bubble {
  #target;
  constructor(target) {
    this.#target = target;
    this.$bubble = document.createElement("span");
    this.#setStyle();
    this.#render();
  }
  #getRandom(min, max, digit) {
    return (Math.random() * (max - min) + min).toFixed(digit);
  }
  #setStyle() {
    this.$bubble.className = "bubble";
    this.$bubble.style.left = this.#getRandom(0, 100, 0) + "%";
    this.$bubble.style.width = this.#getRandom(8, 40, 0) + "px";
    this.$bubble.style.animation =
      `yMove ${this.#getRandom(2, 4, 1) + "s"} ${this.#getRandom(0, 2, 1)}s ease infinite, ` +
      `xMove 3s ${this.#getRandom(0, 2, 1)}s ease infinite`;
  }
  #render() {
    this.#target.appendChild(this.$bubble);
  }
}

for (let i = 0; i < 70; i++) {
  new Bubble($inner);
}
