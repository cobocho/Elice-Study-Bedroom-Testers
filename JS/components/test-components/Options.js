import Component from "../../cores/Component.js";
import Option from "./Option.js";
import app from "../../App.js";

export default class Options extends Component {
  constructor(target, element, state, className) {
    super(target, element, state, className);
    this.setEvent();
    new Option(this.$element, "div", this.state.options[0], "option plus");
    new Option(this.$element, "div", this.state.options[1], "option minus");
  }
  setEvent() {
    this.$element.addEventListener("click", (event) => {
      if (event.target.classList.contains("options")) return;

      const isPlus = event.target.closest(".option").classList.contains("plus");

      if (isPlus) app.testController.changeQuestion("plus");
      else app.testController.changeQuestion("minus");
    });
  }
}
