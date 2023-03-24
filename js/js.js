const mainButton = document.getElementById("main-btn");
const main = document.getElementById("main");
const qna = document.getElementById("qna");
const result = document.getElementById("result");
function mainToTest(e){
    e.preventDefault();
    main.style.display = "none"
    qna.style.display = "flex"
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
mainButton.addEventListener("click", (e) =>{
    e.preventDefault();
    main.style.display = "none";
    qna.style.display = "flex";
})
