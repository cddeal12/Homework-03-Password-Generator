// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a brand-new password from prompts
function generatePassword() {
    var length = prompt("How many characters?")
    var lowerToggle = confirm("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
