const q19 = document.getElementById("q19");
const btn = document.getElementById("btn-submit");

function onBtnClick() {
  if (q19.value === "") {
    alert("Please fill out the form.");
  } else {
    alert("Feedback submitted successfully!");
    q19.value = "";
  }
}

btn.addEventListener("click", onBtnClick);
