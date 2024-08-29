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
function calculateAreaFormula() {

    if (X4Area.value.length < 0 && Y4Area.value.length < 0) {

        var operation_result1 = ((Y1Area.value*X2Area.value)+(Y2Area.value*X3Area.value)+(Y3Area.value*X1Area.value))

        var operation_result2 = ((Y1Area.value*X3Area.value)+(Y3Area.value*X2Area.value)+(Y2Area.value*X1Area.value))

        var final_result = operation_result1 - operation_result2  

        ResultArea.value = final_result + " sq. units";

    } else if (X4Area.value.length > 0 && Y4Area.value.length > 0) {// x4 and x4 length has to be greater than 0

        var operation_result1 =((Y1Area.value*X2Area.value)+(Y2Area.value*X3Area.value)+(Y3Area.value*X4Area.value)+(Y4Area.value*X1Area.value))

        var operation_result2 = ((Y1Area.value*X4Area.value)+(Y4Area.value*X3Area.value)+(Y3Area.value*X2Area.value)+(Y2Area.value*X1Area.value))

        var final_result = operation_result1 - operation_result2

        ResultArea.value = final_result + " sq. units";
    }
}
