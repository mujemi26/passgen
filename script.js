const passwordBox = document.getElementById("password");
const range = 12;

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";

const allChars = lowerCase + upperCase + symbols + numbers;

function magicPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (range > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPass() {
  passwordBox.select();
  document.execCommand("copy");
}
