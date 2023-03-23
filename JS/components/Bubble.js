import Component from "../cores/Component.js";
import { getRandom } from "../Utils.js";

export default class Bubble extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
    this.setStyle();
  }
  setStyle() {
    this.$element.style.left = getRandom(0, 100, 0) + "%";
    this.$element.style.width = getRandom(8, 40, 0) + "px";
    this.$element.style.animation =
      `yMove ${getRandom(2, 4, 1) + "s"} ${getRandom(0, 2, 1)}s ease infinite, ` + `xMove 3s ${getRandom(0, 2, 1)}s ease infinite`;
  }
}
