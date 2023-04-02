import { QUESTIONS, TYPE_QUESTIONS } from "./constants/Questions.js";
import TestWrapper from "./components/test-components/TestWrapper.js";
import { $ } from "./Utils.js";
import app from "./App.js";

export default class TestController {
  constructor() {
    this.state = {
      seq: 0,
      currentCategory: null,
      ibu: 0,
      malty: 0,
      type: null,
      result: null,
    };
  }

  setFirstTest() {
    this.setCategory();
    setTimeout(() => {
      new TestWrapper($("body"), "section", QUESTIONS[0], "test-wrapper");
    }, 2500);
  }

  setTest() {
    new TestWrapper($("body"), "section", QUESTIONS[this.state.seq], "test-wrapper");
  }

  setTypeTest(input) {
    new TestWrapper($("body"), "section", { seq: this.state.seq, ...TYPE_QUESTIONS[this.state.type][input] }, "test-wrapper");
  }

  increaseSeq() {
    this.state.seq++;
    $(".beer-wrapper").style.transform = `translateY(${100 - 14.28 * this.state.seq}%)`;
  }

  countScore(input) {
    input === "plus" ? this.state[this.state.currentCategory]++ : this.state[this.state.currentCategory]--;
  }

  setCategory() {
    this.state.currentCategory = QUESTIONS[this.state.seq].category;
  }

  setType() {
    const { ibu, malty } = this.state;
    if (ibu > 0 && malty > 0) this.state.type = "type1";
    else if (ibu > 0 && malty < 0) this.state.type = "type2";
    else if (ibu < 0 && malty > 0) this.state.type = "type3";
    else if (ibu < 0 && malty < 0) this.state.type = "type4";
  }

  setResult(result) {
    app.turnToResultPage(result);
  }

  changeQuestion(input) {
    this.increaseSeq();
    $(".test-wrapper").remove();

    if (this.state.seq < 6) {
      this.countScore(input);
      this.setCategory();
      this.setTest();
    }

    if (this.state.seq === 6) {
      this.countScore(input);
      this.setType();
      this.setTypeTest("base");
    }

    if (this.state.seq === 7) {
      this.setTypeTest(input);
    }
  }
}
