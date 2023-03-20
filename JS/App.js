import LandingController from "./LandingController.js";

class App {
  constructor() {
    console.log("app");
    this.landingController = new LandingController();
  }
}

new App();
