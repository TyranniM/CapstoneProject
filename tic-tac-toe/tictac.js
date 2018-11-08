let player1 = "";
let player2 = "";
//Keeps track of whos turn it is x = true o = false
let playerTurn = true;

$(document).ready(function () {

    $("#box1").click(function () {
        if (playerTurn === true) {
            $("#box1").html("X");
            playerTurn = false
        } else {
            $("#box1").html("O");
            playerTurn = true
        }
    });

    $("#box2").click(function () {
        if (playerTurn === true) {
            $("#box2").html("X");
            playerTurn = false
        } else {
            $("#box2").html("O");
            playerTurn = true
        }
    });

    $("#box3").click(function () {
        if (playerTurn === true) {
            $("#box3").html("X");
            playerTurn = false
        } else {
            $("#box3").html("O");
            playerTurn = true
        }
    });

    $("#box4").click(function () {
        if (playerTurn === true) {
            $("#box4").html("X");
            playerTurn = false
        } else {
            $("#box4").html("O");
            playerTurn = true
        }
    });

    $("#box5").click(function () {
        if (playerTurn === true) {
            $("#box5").html("X");
            playerTurn = false
        } else {
            $("#box5").html("O");
            playerTurn = true
        }
    });

    $("#box6").click(function () {
        if (playerTurn === true) {
            $("#box6").html("X");
            playerTurn = false
        } else {
            $("#box6").html("O");
            playerTurn = true
        }
    });
    $("#box7").click(function () {
        if (playerTurn === true) {
            $("#box7").html("X");
            playerTurn = false
        } else {
            $("#box7").html("O");
            playerTurn = true
        }
    });
    $("#box8").click(function () {
        if (playerTurn === true) {
            $("#box8").html("X");
            playerTurn = false
        } else {
            $("#box8").html("O");
            playerTurn = true
        }
    });
    $("#box9").click(function () {
        if (playerTurn === true) {
            $("#box9").html("X");
            playerTurn = false
        } else {
            $("#box9").html("O");
            playerTurn = true
        }
    });

});
$("#resetButton").click(function () {
    if (playerTurn <= 9) {
        playerTurn = false
    }
    location.reload();

});