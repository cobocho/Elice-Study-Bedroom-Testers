import * as app from "./App.js";

export let currentGameNumber = 0;
export let startTime, clickTime;
export let changeState;
const reactionTestButton = document.querySelector("#reactionTestButton");
const REACTION_RECORDS_KEY = "reaction_records";

// 반응속도 테스트 시작
function startReactionTest() {
  app.testTitle.innerText = "반응속도 테스트";
  app.startTest();
  const mainButton = document.querySelectorAll("#mainButton")[1];
  const testForm = document.querySelector("#testForm");
  mainButton.addEventListener("click", app.resetTest);
  testForm.addEventListener("submit", setReactionTest);
}

// 반응속도 테스트 시작 페이지 구성
function setReactionTest(e) {
  e.preventDefault();
  app.setProgress();
  app.test.classList.add("reactionTestBox", "startTest");
  app.test.innerText = "시작하려면 클릭하세요!";
  app.test.addEventListener("click", reactionClick);
}

// 화면의 상태에 따라 사용자 입력의 결과를 나타냄
function reactionClick() {
  if (app.test.classList.contains("startTest")) {
    getReady();
  } else if (app.test.classList.contains("getReady")) {
    tooFast();
  } else if (app.test.classList.contains("clickNow")) {
    clickNow();
    if (currentGameNumber === app.testNumber) {
      currentGameNumber = 0;
      app.test.removeEventListener("click", reactionClick);
      app.reactionResultPage(REACTION_RECORDS_KEY);
    }
  }
}

// 대기 상태의 경우
function getReady() {
  app.test.innerText = "기다리세요...";
  app.test.classList.replace("startTest", "getReady");
  app.test.classList.remove("timeResult");
  changeState = setTimeout(() => {
    startTime = new Date();
    app.test.classList.replace("getReady", "clickNow");
    app.test.innerText = "클릭하세요!";
  }, parseInt(1000 + Math.random() * 5000));
}

// 사용자의 입력이 너무 빨랐을 경우
function tooFast() {
  clearTimeout(changeState);
  app.test.innerText = "너무 빨랐습니다!";
  app.test.classList.replace("getReady", "startTest");
}

// 화면의 색이 바뀌었을 경우
function clickNow() {
  clickTime = new Date();
  const currentRecord = clickTime - startTime;
  app.test.classList.add("timeResult");
  currentGameNumber += 1;
  app.progressState.innerText = `${currentGameNumber} / ${app.testNumber}`;
  app.progressBar.value = parseInt((currentGameNumber / app.testNumber) * 100);
  app.test.innerText = `${currentGameNumber}회 : ${currentRecord}ms\n계속하려면 클릭하세요`;
  app.resultTimes.push(currentRecord);
  app.saveRecords(currentRecord, REACTION_RECORDS_KEY);
  app.test.classList.replace("clickNow", "startTest");
}

reactionTestButton.addEventListener("click", startReactionTest);
mainButton.addEventListener("click", () => {
  currentGameNumber = 0;
});
