// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// random number function
function random (min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}
// generate password function
function generatePassword() {
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  //console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
