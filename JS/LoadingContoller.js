import Loading from "./components/loading/Loading.js";
import LOADING_DESCRIPTIONS from "./constants/LoadingDescriptions.js";
import { $ } from "./Utils.js";

export default class LoadingController {
  setLoading() {
    const idx = Math.floor(Math.random() * LOADING_DESCRIPTIONS.length);
    new Loading($("body"), "div", LOADING_DESCRIPTIONS[idx], "loading");
  }
  direct(result) {
    location.href = `./result.html?id=${result}`;
  }
}
