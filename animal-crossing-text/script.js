const inputField = document.getElementById("inputText");
const submitButton = document.getElementById("submitButton");
const outputField = document.getElementById("outputText");

submitButton.addEventListener("click", function () {
  const inputText = inputField.value.trim();
  outputField.textContent = "";
  if (inputText) {
    for (let i = 0; i < inputText.length; i++) {
      setTimeout(() => {
        outputField.textContent += inputText.charAt(i);
      }, i * 30);
    }
  } else {
    outputField.textContent = "Please enter some text.";
  }
});