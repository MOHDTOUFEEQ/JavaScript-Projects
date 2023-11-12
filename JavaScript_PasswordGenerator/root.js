console.log("hello");
const generate = document.querySelector("#generate")
const output = document.querySelector(".output")
const copyIcon = document.querySelector("#copyIcon")
const body = document.querySelector("body")
const h2 = "";
generate.addEventListener("click",function() {
  // console.log("hello");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()_-+=:;,.<>?/'\"\\|{}[]~`";
  
  const max = 12;
  let password = "";
  
  // Generating the password
  for (let i = 0; i < max; i++) {
    const randomChoice = Math.floor(Math.random() * 4);  // Generate a random number from 0 to 3
    console.log(randomChoice);
    if (randomChoice === 0) {
      password += alphabet[Math.floor(Math.random() * alphabet.length)];
    } else if (randomChoice === 1) {
      password += alphabets[Math.floor(Math.random() * alphabets.length)];
    } else if (randomChoice === 2) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    } else {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
  }
  const output = document.querySelector(".output");
  // console.log(password);
  output.textContent = password;
});

copyIcon.addEventListener("click",function () {
    const output = document.querySelector(".output")
    const passwordd = output.textContent
    const area = document.createElement("textarea")
    document.body.appendChild(area)
    area.value = passwordd
    console.log(area.select());
    document.execCommand("copy")
    document.body.removeChild(area)
})