import Component from "../../cores/Component.js";

export default class Question extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
    this.setQuestion(this.state);
  }
  setQuestion(question) {
    this.$element.innerHTML = question;
  }
}
