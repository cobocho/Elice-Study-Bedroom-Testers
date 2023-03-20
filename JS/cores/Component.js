export default class Component {
  #target;
  constructor(target, element) {
    this.#target = target;
    this.$element = document.createElement(element);
    this.render();
  }
  render() {
    this.#target.appendChild(this.$element);
  }
}
