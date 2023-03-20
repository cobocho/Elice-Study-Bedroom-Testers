import Component from "../cores/Component.js";

export default class Bubble extends Component {
  constructor(target, element) {
    console.log("Bubble");
    super(target, element);
    this.setStyle();
  }
  getRandom(min, max, digit) {
    return (Math.random() * (max - min) + min).toFixed(digit);
  }
  setStyle() {
    this.$element.className = "bubble";
    this.$element.style.left = this.getRandom(0, 100, 0) + "%";
    this.$element.style.width = this.getRandom(8, 40, 0) + "px";
    this.$element.style.animation =
      `yMove ${this.getRandom(2, 4, 1) + "s"} ${this.getRandom(0, 2, 1)}s ease infinite, ` +
      `xMove 3s ${this.getRandom(0, 2, 1)}s ease infinite`;
  }
}
