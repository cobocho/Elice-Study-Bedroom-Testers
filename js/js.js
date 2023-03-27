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

function mainToTest(e) {
    e.preventDefault();
    main.style.display = "none";
    qna.style.display = "flex";
}

function testToResult(e) {
    e.preventDefault();
    qna.style.display = "none";
    result.style.display = "flex";
}

let i = 0;
let menuIndex = [...Array(menuList.length).keys()].sort(() => Math.random() - 0.5).slice(0, 32);

function progress(idx) {
    progressBar.style.width = `${idx * 3.3}%`;
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
    progress(i);
    nextMenu(i);
    i++;
});
menu1.addEventListener("click", (e) => {
    menuIndex.push(menuIndex[i * 2]);
    if (i === 30) testToResult(e)
    else {
        progress(i);
        nextMenu(i);
        i++;
    }
})
menu2.addEventListener("click", (e) => {
    menuIndex.push(menuIndex[i * 2 + 1]);
    if (i === 30) testToResult(e)
    else {
        progress(i);
        nextMenu(i);
        i++;
    }
})
