



//adding in variables for the different characters to use

var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseChar = ["abcdefghijklmnopqrstuvwxyz"]

var upperCaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

var specialChar = ["!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

// variables for prompting which characters will be used
var hasNumChar = confirm(
  "Click OK to add numbers to password."
);

var hasLowerChar = confirm(
  "Click OK to add lowercase letters to password."
);

var hasUpperChar = confirm(
  "Click OK to add uppercase letters to password."
);

var hasSpecialChar = confirm(
  "Click OK to add special characters to password."
);

var PassOptions = {
  length: length,
  hasNumChar: hasNumChar,
  hasLowerChar: hasLowerChar,
  hasUpperChar: hasUpperChar,
  hasSpecialChar: hasSpecialChar
};


function writePassword() {
  myform.row_password.value = randomPassword(myform.length.value);
//evaluate character type
var charSet = "";


//return value
var returnValue = "";
for (var i = 0; i < length; i++) {
  //picks a character within charSet at index of random number
  returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
}
return returnValue;
}
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  document.getElementById("placeholder").innerHTML = total.toString();

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



