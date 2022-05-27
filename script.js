// Assignment code here


var length = Number(prompt("Choose number of characters for password"));

var upChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var loChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numChar = ["1","2","3","4","5","6","7","8","9","0"];

var spChar = ["!","@","#","$","%","^","&","*","(",")","<",">","+","=","?","/"];

var charSet = [upChar,loChar,numChar,spChar];

var Type = (prompt("Choose Character Type:Uppercase, lowercase, number, special"));
  
if (Type==="uppercase" || Type==="UPPERCASE") 
 
  var randomNumber=  function randomNumber() {

   var value = Math.floor(Math.random() * (26)) + 2;

    return value;
  
  }

()
  
    console.log(upChar[randomNumber]);
  

if  (Type==="lowercase" || Type==="LOWERCASE") 

  var randomNumber= function() {

    var value= Math.floor(Math.random()*(26))+2;
  
    return value;

  }

  ()

  console.log (loChar[randomNumber]);


  if (Type==="numerical" || Type==="NUMERICAL");

  var randomNumber= function() {

    var value= Math.floor(Math.random()*(9));

    return value;
  
  }

  ()

  console.log(numChar[randomNumber]);



  if (Type==="special" || Type==="SPECIAL");


  var randomNumber= function() {

    var value= Math.floor(Math.random()*(5))+2;

    return value;
  
  }

  ()

  console.log(spChar[randomNumber])







  //}
//}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
