// page loads, generate password button is clicked to start the alerts about choosing the password criteria

document.getElementById("try").addEventListener("click", function() {
    

    // alert and prompts for gathering password criteria 
    alert("Continue to set password criteria.");
    
    var passwordUppercase = confirm("Do you want uppercase letters in the password?");
   
    var passwordLowercase = confirm("Do you want lowercase letters in the password?");
    
    var passwordNumbers = confirm("Do you want to include numbers in the password?"); 

    var passwordSpecial = confirm("Do you want to include special chararcters in the password?")

    var passwordLength = prompt("Pick password length between 8 and 128 characters?");
   

    var password = generate(passwordUppercase, passwordLowercase, passwordNumbers, passwordSpecial, passwordLength);

    document.getElementById("display").value=password;
});


// generate random password
var generate = function(isUC, isLC, isNum, isSP, pwLen){

    let password = "";
    // change length of password from "string" to number
    pwLen = parseInt(pwLen,10);

    
    let values = "";
    let valuesUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let valuesLC = "abcdefghijklmnopqrstuvwxyz";
    let valuesNum = "1234567890";
    let valuesSp = "!@#$%&?-+";

    if (isUC){
        values = values + valuesUC;
    }

    if (isLC){
        values = values + valuesLC;
    }

    if (isSP){
        values = values + valuesSp;
    }

    if (isNum){
        values = values + valuesNum;
    }

    for(var i = 0; i < pwLen; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    return password;
  
}
