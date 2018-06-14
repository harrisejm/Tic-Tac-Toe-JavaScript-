$(document).ready(function(){

  var row1 = ["A1", "B1", "C1"];
  var row2 = ["A2", "B2", "C2"];
  var row3 = ["A3", "B3", "C3"];

  var board = [row1, row2, row3];
  var p1 = [];
  var p2 = [];

var turn = false;
var Player = function(name, turn, win,){
  this.name = name;
  this.turn = turn;
  this.win = win;
}

var Square = function(emptySquare, xSquare, oSquare) {
  this.emptySquare = emptySquare;
  this.xSquare = xSquare;
  this.oSquare = oSquare;
}

var player1 = new Player("Eddie", true, false);
var firstSquare = new Square(true, false, false);


$("#A1click").click(function(event) {
event.preventDefault();
  if (turn === true) {
    $("#A1click").hide();
    $("#A1x").toggle();
    p1.push(board[0][0]);
 //document.getElementById("test2").innerHTML = p1.join(" "); ////
  firstSquare.emptySquare = false;
  firstSquare.xSquare = true;
  firstSquare.oSquare = false;
  turn = false;
  document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
  $("#A1click").hide();
  $("#A1o").toggle();
  p2.push(board[0][0]);
//  document.getElementById("test3").innerHTML = "HELLO"; ////
  firstSquare.emptySquare = false;
  firstSquare.oSquare = true;
  firstSquare.xSquare = false;
  turn = true;
  document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});



$("#B1click").click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#B1click").hide();
  $("#B1x").toggle();
  p1.push(board[0][1]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#B1click").hide();
$("#B1o").toggle();
p2.push(board[0][1]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$("#C1click" ).click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#C1click").hide();
  $("#C1x").toggle();
  p1.push(board[0][2]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare  + p1.join(" ");
} else if (turn === false) {
$("#C1click").hide();
$("#C1o").toggle();
p2.push(board[0][2]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$( "#A2click").click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#A2click").hide();
  $("#A2x").toggle();
  p1.push(board[1][0]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#A2click").hide();
$("#A2o").toggle();
p2.push(board[1][0]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$("#B2click" ).click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#B2click").hide();
  $("#B2x").toggle();
  p1.push(board[1][1]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#B2click").hide();
$("#B2o").toggle();
p2.push(board[1][1]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$("#C2click" ).click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#C2click").hide();
  $("#C2x").toggle();
  p1.push(board[1][2]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#C2click").hide();
$("#C2o").toggle();
p2.push(board[1][2]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$("#A3click" ).click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#A3click").hide();
  $("#A3x").toggle();
  p1.push(board[2][0]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#A3click").hide();
$("#A3o").toggle();
p2.push(board[2][0]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$("#B3click" ).click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#B3click").hide();
  $("#B3x").toggle();
  p1.push(board[2][1]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#B3click").hide();
$("#B3o").toggle();
p2.push(board[2][1]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

$("#C3click").click(function(event) {
event.preventDefault();
if (turn === true) {
  $("#C3click").hide();
  $("#C3x").toggle();
  p1.push(board[2][2]);
firstSquare.emptySquare = false;
firstSquare.xSquare = true;
firstSquare.oSquare = false;
turn = false;
document.getElementById("test").innerHTML = firstSquare.xSquare + p1.join(" ");
} else if (turn === false) {
$("#C3click").hide();
$("#C3o").toggle();
p2.push(board[2][2]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
document.getElementById("test").innerHTML = firstSquare.xSquare + p2.join(" ");
}
});

});
