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
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const q13 = document.getElementById("q13");
const q14 = document.getElementById("q14");
const q15 = document.getElementById("q15");

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
    question11: q11.value,
    question12: q12.value,
    question13: q13.value,
    question14: q14.value,
    question15: q15.value,
  };

  return ans;
}

const btn = document.getElementById("btn-submit");
let questions = {};

function onBtnClick() {
  const answers = getQuestion();
  console.log(answers);
}

btn.addEventListener("click", onBtnClick);

// const bike = {
//   name: "mt15",
//   color: "black",
//   company: "yamaha",
//   rate: 100000,
//   speed: 90,
//   wheel: 2,
//   member: 2,
//   owner: {
//     name: "Karthika",
//     husbandName: "Sarath",
//     area: "Kalaiyarkoil",
//   },
//   printHi: function () {
//     return "Hii " + this.name;
//   },
//   calculateEMI: function (initalAmount, intrest) {
//     const balanceAmount = this.rate - initalAmount;
//     const monthlyPricipal = balanceAmount / 12;
//     const monthlyIntrest = (balanceAmount * intrest) / 12;

//     return monthlyPricipal + monthlyIntrest;
//   },
// };

// const greeting = bike.printHi();

// const emi = bike.calculateEMI(30000, 0.08);

// console.log(bike);

// const arr = [1, 3, 4];

// console.log(arr);

// const fullname = "Keerthi";

// console.log(fullname.toLowerCase());

// function divide(value3, value4) {
//   return value3 / value4;
// }
// const result = divide(10, 2);
// console.log(result);

// function evan(value) {
//   return value % 2 === 0;
// }

// const isEvan = evan(2355);
// console.log(isEvan);
