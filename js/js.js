const mainButton = document.getElementById("main-btn");
const main = document.getElementById("main");
const qna = document.getElementById("qna");
const result = document.getElementById("result");
const menu1image = document.getElementById("menu1image");
const menu1name = document.getElementById("menu1name");
const menu2image = document.getElementById("menu2image");
const menu2name = document.getElementById("menu2name");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const progressBar = document.getElementById("bar-progress");
const roundName = document.getElementById("round-name")
const resultMenuImg = document.getElementById("result-menu-img");
const resultMenuName = document.getElementById("result-menu-name");

function mainToTest(e) {
    e.preventDefault();
    main.style.display = "none";
    qna.style.display = "flex";
}

function testToResult(e, idx) {
    e.preventDefault();
    qna.style.display = "none";
    result.style.display = "flex";
    resultMenuName.innerText = `${menuList[menuIndex[i * 2]].name} 입니다!`
    resultMenuImg.src = `${menuList[menuIndex[i * 2]].src}`
}

let i = 0;
let menuIndex = [...Array(menuList.length).keys()].sort(() => Math.random() - 0.5).slice(0, 32);

function progress(idx) {
    progressBar.style.width = `${idx * 3.3}%`;
}

function roundInfo(idx){
    if(i < 16){
        roundName.innerText = "32강";
    } else if(i < 24){
        roundName.innerText = "16강";
    } else if(i < 28){
        roundName.innerText = "8강";
    } else if(i < 30){
        roundName.innerText = "4강";
    } else{
        roundName.innerText = "결승전";
    }
}

function nextMenu(idx) {
    menu1name.innerText = menuList[menuIndex[idx * 2]].name;
    menu1image.src = menuList[menuIndex[idx * 2]].src;
    menu2name.innerText = menuList[menuIndex[idx * 2 + 1]].name;
    menu2image.src = menuList[menuIndex[idx * 2 + 1]].src;
}

mainButton.addEventListener("mouseover", (e) => {
    e.preventDefault();
    mainButton.style.backgroundColor = "#898121";
    mainButton.style.color = "#f7f1e5";
});
mainButton.addEventListener("mouseout", (e) => {
    e.preventDefault();
    mainButton.style.backgroundColor = "#f7f1e5";
    mainButton.style.color = "#898121";
})
mainButton.addEventListener("click", (e) => {
    mainToTest(e);
    roundInfo(i);
    progress(i);
    nextMenu(i);
});
menu1.addEventListener("click", (e) => {
    menuIndex.push(menuIndex[i * 2]);
    i++;
    roundInfo(i);
    if (i === 31) {
        testToResult(e);
    } else {
        progress(i);
        nextMenu(i);
    }
})
menu2.addEventListener("click", (e) => {
    menuIndex.push(menuIndex[i * 2 + 1]);
    i++;
    roundInfo(i);
    if (i === 31) {
        testToResult(e);
    } else {
        progress(i);
        nextMenu(i);
    }
})
