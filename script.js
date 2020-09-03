// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specials = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","]","<",">",",","",".","/","?","~","`"];


// Function to generate a brand-new password from prompts
function generatePassword() {
    var length = prompt("How many characters?");
    length = parseInt(length);
    //If the length is too long or short, the page is reset after an explanatory alert
    if (length < 8 || length > 128) {
        alert("Please choose a number between 8 and 128.");
        location.reload();
    } else if (length >= 8 || length <= 128) {
        var lowerToggle = confirm("Include lowercase letters? (Confirm for yes, cancel for no)");
        var upperToggle = confirm("Include uppercase letters?");
        var numToggle = confirm("Include numeric characters?");
        var specialToggle = confirm("include special characters?");
        var includes = []
    } else {
        alert("Please choose a length between 8 and 128.");
        location.reload;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);