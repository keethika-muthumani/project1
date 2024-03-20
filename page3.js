const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");

const btn = document.getElementById("btn-submit");

function onBtnClick() {
     console.log("question1",  q1.value)
}

btn.addEventListener("click", onBtnClick)