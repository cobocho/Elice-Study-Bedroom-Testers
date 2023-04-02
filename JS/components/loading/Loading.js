import Component from "../../cores/Component.js";
import { $ } from "../../Utils.js";
import LoadingDesc from "./LoadingDesc.js";
import LoadingImage from "./LoadingImage.js";

export default class Loading extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
  }
  mount() {
    new LoadingImage($(".loading"), "div", null, "loading-image");
    new LoadingDesc($(".loading"), "p", this.state, "loading-desc");
  }
}
