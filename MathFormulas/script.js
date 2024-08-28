var X1 = document.getElementById("x1");
var X2 = document.getElementById("x2");
var Y1 = document.getElementById("y1");
var Y2 = document.getElementById("y2");
var Result = document.getElementById("result");

Result.value = "";
X1.value = "";
X2.value = "";
Y1.value = "";
Y2.value = "";

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

