// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  


  var uppercaseArray = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowercaseArray = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
  var characterArray =["!","#","$","%","*","@","+","=","^"]

  var resultArray = [];
  var userArray = [];

  uppercaseArray [1]

var numCharacter = prompt ("How many characters do you want between 8 and 128?");
var numbers = confirm ("do you want numbers in your password?");
var uppercases = confirm ("would you like Uppercase letters in your password?");
var lowercases = confirm ("would you like lowercase letters in your password?");
var characters = confirm ("would you like special characters in your password");


if (numbers){
  resultArray = resultArray.concat(numbersArray);
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);
}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);
}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {

  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copyToClipboard

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
