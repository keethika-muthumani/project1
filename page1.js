const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const imageInput = document.getElementById("image"); // file input
function submitHandler() {
  const { files } = imageInput;
  if (files.length === 0) {
    alert("Please select an image");
    return;
  }
  const file = files[0];
  const { name } = file;
  let result = "Unknown";
  const fileName = name.toLowerCase();
  if (fileName.includes("healthy")) {
    result = "Normal";
  }
  if (fileName.includes("minimal")) {
    result = "Mild";
  }
  if (fileName.includes("moderate")) {
    result = "Moderate";
  }
  if (fileName.includes("severe")) {
    result = "Severe";
  }
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = result;
}
submitBtn.addEventListener("click", submitHandler);

resetBtn.addEventListener("click", () => {
  imageInput.value = "";
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
});
