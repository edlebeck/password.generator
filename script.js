// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numbers = "0123456789"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = upper.toLowerCase();
var special = "!@#$%^&*()-_=+[{]},<.>/?"
var passwordLength = 0

// random number function
function random (min, max) {
  var num = Math.floor(Math.random() * max + min);
  return num;
}
// generate password function
function generatePassword() {
  // password placeholder
  var pw = "";
  // list of viable characters for password
  var viableCharacters = "";

  // Upper case prompt
  var upperCase = window.confirm("Will the password include upper case characters?");
  // add upper case character to password and expand viable characters for password if true
  if (upperCase === true) {
    pw = upper.charAt(random(0 , upper.length-1));
    viableCharacters = viableCharacters + upper;
    window.alert("Password will include upper case characters.");
  } else {
    window.alert("Password will not include upper case characters.")
  };

  // Lower Case prompt
  var lowerCase = window.confirm("Will the password include lower case characters?");
  // add lower case character to password and expand viable characters for password if true
  if (lowerCase === true) {
    pw = pw + lower.charAt(random(0 , lower.length-1));
    viableCharacters = viableCharacters + lower;
    window.alert("Password will include lower case characters.");
  } else {
    window.alert("Password will not include lower case characters.");
  };

  // Special character prompt
  var specialCharacters = window.confirm("Will the password include special characters?");
  // add special characters to password and expand viable characters for password if true
  if (specialCharacters === true) {
    pw = pw + special.charAt(random(0, special.length-1));
    viableCharacters = viableCharacters + special;
    window.alert("Password will include special characters.");
  } else {
    window.alert("Password will not include special characters.");
  };

  // Numbers prompt
  var numberCharacters = window.confirm("Will the password include numbers?");
  // add numbers to password and expand viable characters for password if true
  if (numberCharacters === true){
    pw = pw + numbers.charAt(random(0, numbers.length-1));
    viableCharacters = viableCharacters + numbers;
    window.alert("Password will include numbers.");
  } else {
    window.alert("Password will not include numbers.")
  };
  // restart password parameter selection if no viable characters
  if (numberCharacters === false && specialCharacters === false && upperCase === false && lowerCase === false) {
    window.alert("Password parameters include no viable characters.\nPlease select at least one parameter.");
    return generatePassword();
  } else {
    // password length input
    passwordLength = window.prompt("Please select password length between 8 and 128");
    // loop until valid length inputted
    while (true) {
      if (passwordLength < 8){
        passwordLength = window.prompt("Length must be greater than 7, please reselect.");
      } else if (passwordLength > 128) {
        passwordLength = window.prompt("Length must be less than 129, please reselect.");
      } else {
        break;
      };
    }
    window.alert("Password length is " + passwordLength);
  };
  // setting password length for loop
  passwordLength = passwordLength - pw.length;
  // loop to complete password
  for (var i = 0; i < passwordLength; i++) {
    pw = pw + viableCharacters.charAt(random(0, viableCharacters.length-1));
  }
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
