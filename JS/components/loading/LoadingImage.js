import Component from "../../cores/Component.js";

export default class LoadingImage extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
  }
  mount() {
    const $loadingBeer = document.createElement("div");
    $loadingBeer.className = "loading-beer";
    const $loadingMug = document.createElement("div");
    $loadingMug.className = "loading-mug";
    this.$element.appendChild($loadingBeer);
    this.$element.appendChild($loadingMug);
  }
}
