const lengthEl = document.getElementById("length");
const includeLowerEl = document.getElementById("includeLower");
const includeUpperEl = document.getElementById("includeUpper");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeSymbolsEl = document.getElementById("includeSymbols");
const resultEl = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const length = +lengthEl.value; // convert to number
  const includeLower = includeLowerEl.checked;
  const includeUpper = includeUpperEl.checked;
  const includeNumbers = includeNumbersEl.checked;
  const includeSymbols = includeSymbolsEl.checked;

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?~";

  let characters = "";
  if (includeLower) characters += lower;
  if (includeUpper) characters += upper;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (characters.length === 0) {
    resultEl.textContent = "Select at least one character type!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  resultEl.textContent = password;
}
