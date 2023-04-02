export default class Component {
  #target;
  constructor(target, element, state, className) {
    this.state = state;
    this.#target = target;
    this.$element = document.createElement(element);
    if (className) this.$element.className = className;
    this.render();
    this.mount();
  }
  render() {
    this.#target.appendChild(this.$element);
  }
  mount() {}
}
