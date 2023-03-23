import Component from "../../cores/Component.js";

export default class Option extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
    this.setOption(this.state);
  }
  setOption(question) {
    this.$element.innerHTML = `<p>${question}</p>`;
  }
}
