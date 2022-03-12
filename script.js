// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// random number function
function random (min, max) {
  var num = Math.floor(Math.random() * max + min);
  return num;
}
// generate password function
function generatePassword() {
  var passwordLength = window.prompt("Length of password?");
  while (true) {
    if (passwordLength < 7){
      passwordLength = window.prompt("Length must be greater than 7, please reselect.");
    } else if (passwordLength > 128) {
      passwordLength = window.prompt("Length must be less than 128, please reselect.")
    } else {
      break;
    }
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  //console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
