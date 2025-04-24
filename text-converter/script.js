const input = document.getElementById("input");
const output = document.getElementById("output");
const clearButton = document.getElementById("clear");
const convertButton = document.getElementById("submit");

const binaryInput = document.getElementById("binary-input");
const binaryOutput = document.getElementById("binary-output");
const binaryClearButton = document.getElementById("binary-clear");
const binaryConvertButton = document.getElementById("binary-submit");

const morseInput = document.getElementById("morse-input");
const morseOutput = document.getElementById("morse-output");
const morseClearButton = document.getElementById("morse-clear");
const morseConvertButton = document.getElementById("morse-submit");

function convertToBinary(inputText) {
  let binaryString = "";
  for (let i = 0; i < inputText.length; i++) {
    const charCode = inputText.charCodeAt(i);
    const binaryChar = charCode.toString(2).padStart(8, "0");
    binaryString += binaryChar + " ";
  }
  output.textContent = binaryString.trim();
}

convertButton.addEventListener("click", () => {
  const inputText = input.value;
  if (inputText) {
    const binaryOutput = convertToBinary(inputText);
    output.value = binaryOutput;
  } else {
    output.value = "Please enter some text to convert.";
  }
});

clearButton.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
});

function convertToText(binaryString) {
  const binaryArray = binaryString.split(" ");
  let textOutput = "";
  for (let i = 0; i < binaryArray.length; i++) {
    const charCode = parseInt(binaryArray[i], 2);
    textOutput += String.fromCharCode(charCode);
  }
  return textOutput;
}

binaryConvertButton.addEventListener("click", () => {
  const binaryInputText = binaryInput.value.trim();
  if (binaryInputText) {
    const textOutput = convertToText(binaryInputText);
    binaryOutput.textContent = textOutput;
  } else {
    binaryOutput.textContent = "Please enter a binary string to convert.";
  }
});
binaryClearButton.addEventListener("click", () => {
  binaryInput.value = "";
  binaryOutput.textContent = "";
});

function convertToMorse(inputText) {
  const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ", ": "--..--",
    ". ": ".-.-.-",
    "? ": "..--..",
    "/ ": "-..-.",
    "- ": "-....-",
    "(": "-.--.",
    ") ": "-.--.-",
    " ": "/",
  };
  let morseOutput = "";
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i].toUpperCase();
    if (morseCode[char]) {
      morseOutput += morseCode[char] + " ";
    } else {
      morseOutput += " ";
    }
  }
  return morseOutput.trim();
}

morseConvertButton.addEventListener("click", () => {
  const morseInputText = morseInput.value.trim();
  if (morseInputText) {
    const morseOutputText = convertToMorse(morseInputText);
    morseOutput.textContent = morseOutputText;
  } else {
    morseOutput.textContent = "Please enter some text to convert.";
  }
});
morseClearButton.addEventListener("click", () => {
  morseInput.value = "";
  morseOutput.textContent = "";
});
