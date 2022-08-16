// Assignment code here




var upChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var loChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numChar = ["1","2","3","4","5","6","7","8","9","0"];

var spChar = ["!","@","#","$","%","^","&","*","(",")","<",">","+","=","?","/"];

//var charSet = [upChar,loChar,numChar,spChar];

function generatePassword() {

  var passwordGenerate= "";
  var pChar="";

  var length= Number(prompt("How many characters would you like your password to be? Choose a number between 8 and 128"));

  length=parseInt(length);
  console.log("length", length);//checking for length entered

  alert("Please follow the prompts to select character categories for your password");



  var loCharSelect = confirm("Would you like to use lowercase characters?");
  console.log("here", loCharSelect) //checking if selecting lower case

  if (loCharSelect) {

    var value= Math.floor(Math.random()*(26))+2;
    pChar += loChar[value]; //loChar[5] -> pChar -> "f"
    console.log("pChar", pChar, "random",value);
    
  }

  var upCharSelect = confirm ("Would you like to use UPPERCASE characters?");

  if (upCharSelect){
    var value= Math.floor(Math.random()*(26))+2;
    pChar += upChar[value];
    console.log("upChar", pChar);

  }

  var numCharSelect= confirm ("Would you like to use numbers in your password?");

  if (numCharSelect){
    var value= Math.floor(Math.random()*(10))+2;
    pChar += numChar[value];

  }

  var spCharSelect = confirm ("Lastly, would you like to make your password extra secure using special characters?");

  if (spCharSelect){
    var value= Math.floor(Math.random()*(16))+2;
    pChar += spChar[value];
  }

  for(var i=0; i<length; i++){

    passwordGenerate += pChar[Math.floor(Math.random()*pChar.length)];

  }
  console.log("password",passwordGenerate);
  return passwordGenerate
}

//generatePassword();

var generateBtn= document.querySelector("#generate");
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)
  
  
  

//writePassword();
//var Type = (prompt("Choose Character Type:Uppercase, lowercase, number, special"));
  
//if (Type==="uppercase" || Type==="UPPERCASE") 
 
  //var randomNumber=  function randomNumber() {

   //var value = Math.floor(Math.random() * (26)) + 2;

    //return value;
  
  //}

///()
  
   // console.log(upChar[randomNumber]);
  

//if  (Type==="lowercase" || Type==="LOWERCASE") 

  // var randomNumber= function() {

  //   var value= Math.floor(Math.random()*(26))+2;
  
  //   return value;

  // }

  // ()

  // console.log (loChar[randomNumber]);


  // if (Type==="numerical" || Type==="NUMERICAL");

  // var randomNumber= function() {

  //   var value= Math.floor(Math.random()*(9));

  //   return value;
  
  // }

  // ()

  // console.log(numChar[randomNumber]);



  // if (Type==="special" || Type==="SPECIAL");


  // var randomNumber= function() {

  //   var value= Math.floor(Math.random()*(5))+2;

  //   return value;
  
  // }

  // ()



  //console.log(spChar[randomNumber])







  //}
//}




// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
