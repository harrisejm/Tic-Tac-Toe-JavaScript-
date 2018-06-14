$(document).ready(function(){

  var row1 = ["A1", "B1", "C1"];
  var row2 = ["A2", "B2", "C2"];
  var row3 = ["A3", "B3", "C3"];

  var board = [row1, row2, row3];
  var p1 = [];
  var p2 = [];

   var winCheck = function(){
  if (p1.includes("A1") === true && p1.includes("B1") === true && p1.includes("C1") === true) {
    player1.win = true;
  } else if (p1.includes("A2") === true && p1.includes("B2") === true && p1.includes("C2") === true) {
    player1.win = true;
  } else if (p1.includes("A3") === true && p1.includes("B3") === true && p1.includes("C3") === true) {
  player1.win = true;
  } else if (p1.includes("A1") === true && p1.includes("A2") === true && p1.includes("A3") === true) {
    player1.win = true;
  } else if (p1.includes("B1") === true && p1.includes("B2") === true && p1.includes("B3") === true) {
    player1.win = true;
  }  else if (p1.includes("C1") === true && p1.includes("C2") === true && p1.includes("C3") === true) {
    player1.win = true;
  } else if (p1.includes("A1") === true && p1.includes("B2") === true && p1.includes("C3") === true) {
    player1.win = true;
  } else if (p1.includes("A3") === true && p1.includes("B2") === true && p1.includes("C1") === true) {
  player1.win = true;

  } else if (p2.includes("A1") === true && p2.includes("B1") === true && p2.includes("C1") === true) {
    player2.win = true;
  } else if (p2.includes("A2") === true && p2.includes("B2") === true && p2.includes("C2") === true) {
    player2.win = true;
  } else if (p2.includes("A3") === true && p2.includes("B3") === true && p2.includes("C3") === true) {
    player2.win = true;
  } else if (p2.includes("A1") === true && p2.includes("A2") === true && p2.includes("A3") === true) {
    player2.win = true;
  } else if (p2.includes("B1") === true && p2.includes("B2") === true && p2.includes("B3") === true) {
    player2.win = true;
  }  else if (p2.includes("C1") === true && p2.includes("C2") === true && p2.includes("C3") === true) {
    player2.win = true;
  } else if (p2.includes("A1") === true && p2.includes("B2") === true && p2.includes("C3") === true) {
    player2.win = true;
  } else if (p2.includes("A3") === true && p2.includes("B2") === true && p2.includes("C1") === true) {
  player2.win = true;
  }

}


var turn = true;
var Player = function(name, turn, win,){
  this.name = name;
  this.turn = turn;
  this.win = win;
}

var winDeclare = function() {
  if (player1.win === true){
    $("#win1").show();
    $("#gameBody").hide();
  } else if (player2.win === true){
    $("#win2").show();
    $("#gameBody").hide();
  }
}

var Square = function(emptySquare, xSquare, oSquare) {
  this.emptySquare = emptySquare;
  this.xSquare = xSquare;
  this.oSquare = oSquare;
}

var player1 = new Player("Eddie", true, false);
var player2 = new Player("Eddie1", false, false);
var firstSquare = new Square(true, false, false);

$("#A1click").click(function(event) {
event.preventDefault();
  if (turn === true) {
    $("#A1click").hide();
    $("#A1x").toggle();
    p1.push(board[0][0]);

  firstSquare.emptySquare = false;
  firstSquare.xSquare = true;
  firstSquare.oSquare = false;
  turn = false;
} else if (turn === false) {
  $("#A1click").hide();
  $("#A1o").toggle();
  p2.push(board[0][0]);
//  document.getElementById("test3").innerHTML = "HELLO"; ////
  firstSquare.emptySquare = false;
  firstSquare.oSquare = true;
  firstSquare.xSquare = false;
  turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#B1click").hide();
$("#B1o").toggle();
p2.push(board[0][1]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#C1click").hide();
$("#C1o").toggle();
p2.push(board[0][2]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#A2click").hide();
$("#A2o").toggle();
p2.push(board[1][0]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;
}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#B2click").hide();
$("#B2o").toggle();
p2.push(board[1][1]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#C2click").hide();
$("#C2o").toggle();
p2.push(board[1][2]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#A3click").hide();
$("#A3o").toggle();
p2.push(board[2][0]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#B3click").hide();
$("#B3o").toggle();
p2.push(board[2][1]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
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

} else if (turn === false) {
$("#C3click").hide();
$("#C3o").toggle();
p2.push(board[2][2]);
firstSquare.emptySquare = false;
firstSquare.oSquare = true;
firstSquare.xSquare = false;
turn = true;

}
winCheck();
winDeclare();
});

});
