//First calculator elements
var X1 = document.getElementById("x1");
var X2 = document.getElementById("x2");
var Y1 = document.getElementById("y1");
var Y2 = document.getElementById("y2");
var Result = document.getElementById("resultDistance");
//Second calculator elements
var X1Area = document.getElementById("x1Area");
var X2Area = document.getElementById("x2Area");
var X3Area = document.getElementById("x3Area");
var X4Area = document.getElementById("x4Area");
var Y1Area = document.getElementById("y1Area");
var Y2Area = document.getElementById("y2Area");
var Y3Area = document.getElementById("y3Area");
var Y4Area = document.getElementById("y4Area");
var ResultArea = document.getElementById("resultArea");
//Divs
var formulasdiv = document.getElementById("formulas");
var firstpartialdiv = document.getElementById("firstpartial");
var thirdsemesterdiv = document.getElementById("thirdsemester");
var mathformulasdiv = document.getElementById("mathformulas");
var logindiv = document.getElementById("loginDiv");
//login
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginError = document.getElementById("successorno");
var loginButton = document.getElementById("loginButton");

formulasdiv.hidden = true;
firstpartialdiv.hidden = true;
thirdsemesterdiv.hidden = true;
mathformulasdiv.hidden = true;


//clear when loaded 
Result.value = "";
X1.value = "";
X2.value = "";
Y1.value = "";
Y2.value = "";

X1Area.value ="";
X2Area.value ="";
X3Area.value ="";
X4Area.value ="";

Y1Area.value ="";
Y2Area.value ="";
Y3Area.value ="";
Y4Area.value ="";

ResultArea.value = "";

loginError.value ="";
usernameInput.value ="";
passwordInput.value ="";


var passwordEncrypted = "bmFoaWRhQWRtaW4="
function calculateDistanceFormula() {

    if (X1.value <= 0) {
        // x1 is lower than 0 (negative numbers)
        X1.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (X1.value >= 0) {
        // x1 is greater than 0 (positive numbers)

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (X2.value <= 0) {
        // x2 is lower than 0 (negative numbers)
        X2.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (X2.value >= 0) {
        // x2 is greater than 0 (positive numbers)

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (Y1.value >= 0) {
        // y1 is greater than 0 (positive numbers)

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (Y1.value <= 0) {
        // y1 is lower than 0 (negative numbers)
        Y1.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (Y2.value >= 0) {
        // y2 is greater than 0 (positive numbers)

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (Y2.value <= 0) {
        // y2 is lower than 0 (negative numbers)
        Y2.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";
        
    } else if (X1.value <= 0 && X2.value <= 0) {
        // both x1 and x2 are negative numbers
        X1.value*-1
        //X2.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";

    } else if (X1.value <= 0 && Y1.value <= 0) {
        // x1 is negative and y1 is negative
        X1.value*-1
        Y1.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";

    } else if (X1.value <= 0 && Y2.value <= 0) {
        // x1 is negative and y2 is negative
        X1.value*-1
        Y2.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;
        
        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";

    } else if (X2.value <= 0 && Y1.value <= 0) {
        // x2 is negative and y1 is negative
        X2.value*-1
        Y1.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";

    } else if (X2.value <= 0 && Y2.value <= 0) {
        // x2 is negative and y2 is negative
        X2.value*-1
        Y2.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";

    } else if (Y1.value <= 0 && Y2.value <= 0) {
        // both y1 and y2 are negative
        Y1.value*-1
        //Y2.value*-1

        var A = X2.value-X1.value;
        var B = Y2.value-Y1.value;

        var A_SQU = A**2;
        var B_SQU = B**2;

        var C = A_SQU + B_SQU

        var C_SQRT = Math.sqrt(C);
        
        Result.value = C_SQRT + " u (Units)";

    }
}

var usernameEncrypted = "bmFoaWRh";

function calculateAreaFormula() {
    if (X4Area.value.length > 0 && Y4Area.value.length > 0) {
        // x4 and y4 are greater than 0
        var operation_result1 = ((Y1Area.value * X2Area.value) + (Y2Area.value * X3Area.value) + (Y3Area.value * X4Area.value) + (Y4Area.value * X1Area.value));
        var operation_result2 = ((Y1Area.value * X4Area.value) + (Y4Area.value * X3Area.value) + (Y3Area.value * X2Area.value) + (Y2Area.value * X1Area.value));
        var final_result = operation_result1 - operation_result2;
        var fixed_final_result = final_result/2;
        ResultArea.value = final_result + " u²";
    } else {
        // x4 and y4 are not greater than 0
        var operation_result1 = ((Y1Area.value * X2Area.value) + (Y2Area.value * X3Area.value) + (Y3Area.value * X1Area.value));
        var operation_result2 = ((Y1Area.value * X3Area.value) + (Y3Area.value * X2Area.value) + (Y2Area.value * X1Area.value));
        var final_result = operation_result1 - operation_result2;
        var fixed_final_result = final_result/2;
        ResultArea.value = fixed_final_result + " u²";
    }
}

var passwordDecrypted = window.atob(passwordEncrypted);
var usernameDecrypted = window.atob(usernameEncrypted);

var othersUsernameEncrypted = "b3RoZXJz"
var othersUsernameDecryted = window.atob(othersUsernameEncrypted);

var othersPasswordEncrypted = "YWRtaW4="
var othersPasswordDecrypted = window.atob(othersPasswordEncrypted);

function login() {
    if (usernameInput.value !== usernameDecrypted && passwordInput.value == passwordDecrypted) {
        loginError.value = "Invalid username!"
        usernameInput.value = "";
        passwordInput.value = ""; 
    
    } else if (usernameInput.value !== usernameDecrypted && passwordInput.value == passwordDecrypted) {
        loginError.value = "Invalid password!"
        usernameInput.value = "";
        passwordInput.value = "";    

    }else if(usernameInput.value !== usernameDecrypted && passwordInput.value !== passwordDecrypted) {
        loginError.value = "Invalid credentials!"
        usernameInput.value = "";
        passwordInput.value = "";
        
    

    } else if (usernameInput.value == usernameDecrypted && passwordInput.value == passwordDecrypted) {
        loginError.value = "Login successful!"
        usernameInput.value = "";
        passwordInput.value = "";
        setTimeout(1000);
        loginError.value = "";
        formulasdiv.hidden = false;
        firstpartialdiv.hidden = false;
        thirdsemesterdiv.hidden = false;
        mathformulasdiv.hidden = false;
        logindiv.hidden = true;


    }
}

function login() {
    if (usernameInput.value !== othersUsernameDecryted && passwordInput.value == othersPasswordDecrypted) {
        loginError.value = "Invalid username!"
        usernameInput.value = "";
        passwordInput.value = ""; 
    
    } else if (usernameInput.value !== othersUsernameDecryted && passwordInput.value == othersPasswordDecrypted) {
        loginError.value = "Invalid password!"
        usernameInput.value = "";
        passwordInput.value = "";    

    }else if(usernameInput.value !== othersUsernameDecryted && passwordInput.value !== othersPasswordDecrypted) {
        loginError.value = "Invalid credentials!"
        usernameInput.value = "";
        passwordInput.value = "";
        
    

    } else if (usernameInput.value == othersUsernameDecryted && passwordInput.value == othersPasswordDecrypted) {
        loginError.value = "Login successful!"
        usernameInput.value = "";
        passwordInput.value = "";
        setTimeout(1000);
        loginError.value = "";
        formulasdiv.hidden = false;
        firstpartialdiv.hidden = false;
        thirdsemesterdiv.hidden = false;
        mathformulasdiv.hidden = false;
        logindiv.hidden = true;


    }
}

