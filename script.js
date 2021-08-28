

document.querySelector("#generate").addEventListener("click", writePassword);

// array for variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["%", "&", ",", "*", "!", "+", "-", , "/", "<", ">", ".", "?"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// confirming variables
var confirmLength = "";
var confirmcharacters;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


function generatePassword() {
  var confirmLength = (prompt("How long would you like your password to be?"));

  
  while(confirmLength <= 7 || confirmLength >= 51) {
      alert("Password length must be between 8 and 128 characters");
      var confirmLength = (prompt("How long would you like your password to be?"));
      } 

      // verify password length 
      alert(`Your password will be ${confirmLength} characters long`);

    // check to see which cases user wants to add 
    var confirmcharacters = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
      
      var passwordGenerated = []
      
    if (confirmcharacters) {
      passwordGenerated = passwordGenerated.concat(characters)
    }

    if (confirmNumericCharacter) {
      passwordGenerated = passwordGenerated.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordGenerated = passwordGenerated.concat(lower)
    }

    if (confirmUpperCase) {
      passwordGenerated = passwordGenerated.concat(upper)
    }

      
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordGenerated[Math.floor(Math.random() * passwordGenerated.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Writes in password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

