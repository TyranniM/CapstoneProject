let value1;
let value2;
let operator;

$(document).ready(function () {
    

    $("#numberButton1").click(function () {
        $("#display").val($("#display").val() + "1");
    });
    $("#numberButton2").click(function () {
        $("#display").val($("#display").val() + "2");
    });
    $("#numberButton3").click(function () {
        $("#display").val($("#display").val() + "3");
    });
    $("#numberButton4").click(function () {
        $("#display").val($("#display").val() + "4");
    });
    $("#numberButton5").click(function () {
        $("#display").val($("#display").val() + "5");
    });
    $("#numberButton6").click(function () {
        $("#display").val($("#display").val() + "6");
    });
    $("#numberButton7").click(function () {
        $("#display").val($("#display").val() + "7");
    });
    $("#numberButton8").click(function () {
        $("#display").val($("#display").val() + "8");
    });
    $("#numberButton9").click(function () {
        $("#display").val($("#display").val() + "9");
        // console.log("hi")
    });
    
    $("#plusButton").click(function () {
        value1 = parseInt($("#display").val())
        operator = "+"

        $("#display").val("");

    });
    $("#minusButton").click(function () {
        value1 = parseInt($("#display").val())
        operator = "-"

        $("#display").val("");
    });
    $("#multiplyButton").click(function () {
        value1 = parseInt($("#display").val())
        operator = "*"

        $("#display").val("");
    });
    $("#divideButton").click(function () {
        value1 = parseInt($("#display").val())
        operator = "/"

        $("#display").val("");
    });
    $("#equalButton").click(function () {
        if (operator === "+") {
            $('#display').val(value1 + parseInt($('#display').val()))
        }
        else if (operator === "-") {
            $('#display').val(value1 - parseInt($('#display').val()))
        }
        else if (operator === "*") {
            $('#display').val(value1 * parseInt($('#display').val()))
        }
        else if(operator === "/") {
            $('#display').val(value1 / parseInt($('#display').val()))
        }
    });
    $("#clearButton").click(function () {
        $("#display").val("C");
        
        $("#display").val("");
    });

});



