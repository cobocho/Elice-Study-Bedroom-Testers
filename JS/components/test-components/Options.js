import Component from "../../cores/Component.js";
import Option from "./Option.js";
import app from "../../App.js";

export default class Options extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
    this.clickable = true;
    this.addEvent();
  }
  addEvent() {
    const clickOption = (event) => {
      if (!event.target.closest(".option") || !this.clickable) {
        return;
      }
      this.clickable = false;

      if (this.state.seq === 7) {
        app.testController.setResult(event.target.closest(".option").id);
        return;
      }

      const isPlus = event.target.closest(".option").classList.contains("plus");

      app.testController.changeQuestion(isPlus ? "plus" : "minus");
      this.clickable = true;
    };

    this.$element.addEventListener("click", clickOption);
  }
  mount() {
    if (this.state.seq === 7) {
      new Option(this.$element, "div", this.state.options[0].desc, "option plus", this.state.options[0].result);
      new Option(this.$element, "div", this.state.options[1].desc, "option minus", this.state.options[1].result);
    } else {
      new Option(this.$element, "div", this.state.options[0], "option plus");
      new Option(this.$element, "div", this.state.options[1], "option minus");
    }
  }
}
