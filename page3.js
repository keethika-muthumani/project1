const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");

const result = document.getElementById("result");
const lowDiet = document.getElementById("low-diet");
const highDiet = document.getElementById("high-diet");

lowDiet.style.display = "none";
highDiet.style.display = "none";

// add event listener to each question it should allow only numbers 1-10 to be entered

q1.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q2.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q3.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q4.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q5.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q6.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q7.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q8.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q9.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

q10.addEventListener("input", (e) => {
  if (e.target.value < 1 || e.target.value > 10) {
    e.target.value = "";
  }
});

function getQuestion() {
  const ans = {
    question1: q1.value,
    question2: q2.value,
    question3: q3.value,
    question4: q4.value,
    question5: q5.value,
    question6: q6.value,
    question7: q7.value,
    question8: q8.value,
    question9: q9.value,
    question10: q10.value,
  };

  //show alert if any question is not answered
  for (const key in ans) {
    if (ans[key] === "") {
      alert("Please answer all questions");
      return;
    }
  }

  //Valuse is sum of all questions, If Value is 0&lt;=40, then “low” and if value is 40&lt;=70 then “moderate” and if value is 70&lt;=100,then “high”

  let sum = 0;
  for (const key in ans) {
    sum += parseInt(ans[key]);
  }

  if (sum >= 0 && sum <= 40) {
    console.log("low");
    return "low";
  } else if (sum >= 40 && sum <= 70) {
    console.log("moderate");
    return "moderate";
  } else if (sum >= 70 && sum <= 100) {
    console.log("high");
    return "high";
  }
}

const btn = document.getElementById("btn-submit");
let questions = {};

function onBtnClick() {
  const answers = getQuestion();
  console.log("🚀 ~ onBtnClick ~ answers:", answers);

  result.innerHTML = `<h3>Your Result is:  ${answers}</h3>`;

  if (answers === "low") {
    lowDiet.style.display = "block";
    highDiet.style.display = "none";
  }

  if (answers === "moderate" || answers === "high") {
    lowDiet.style.display = "none";
    highDiet.style.display = "block";
  }
}

btn.addEventListener("click", onBtnClick);
