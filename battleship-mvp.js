// pregame
// config button pane
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//
// console.log(board.length);
var ROW = board.length
var COLUMN = board[0].length

// note: everything is being measured from the top left hand corner of the square ---> that is the (0,0) origin position
$("body").prepend($("<button>", {id: "patrolboat", "class": "shipbutton"}), $("<button>", {id: "sub", "class": "shipbutton"}), $("<button>", {id: "destroyer", "class": "shipbutton"}), $("<button>", {id: "carrier", "class": "shipbutton"}), $("<button>", {id: "battleship", "class": "shipbutton"}), $("<button>", {id: "setship", "class": "shipbutton"}), $("<button>", {id: "rotate", "class": "shipbutton"}), $("<button>", {id: "start", "class": "shipbutton"}), $("<button>", {id: "restart", "class": "shipbutton"}));

for (var row = 0; row < ROW; row++) {
  for (var column = 0; column < COLUMN; column++) {
    var $div = $("<div>", {class: "cell", id:"R"+row+"C"+column})
    $div.insertBefore(".script")
  }
}

for (var row = 0; row < ROW; row++) {
  for (var column = 0; column < COLUMN; column++) {
    // each cell to be set within a div
    // each cell has a class called cell
    // use the class function to set the style of the cell
    // set border, position var id = id+=1
    // add click listener
    var $div = $("<div>", {class: "comcell", id: "R"+row+"C"+column})
    $div.insertBefore(".script")
  }
}

function colorACell(row,column,color) {
  $("#" +"R"+row+"C"+column).css("background-color", color)
}

var BoatDirection = "horizontal"

function makeBoat(row, column, length) {

  for(let i = 0; i < length; i++) {
    // why doesnt this commnd work?
    if (column  === 9) {
        colorACell((row+i), column, "red")
        BoatDirection = "vertical"
    }
    else {
      colorACell(row, (column+i), "red")
    }

    if (BoatDirection === "horizontal") {
      if (column === 8) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell((row+i), column, "red")
        colorACell(row, column, "red")
        BoatDirection = "horizontal"
        console.log("row8"+BoatDirection);
      })
    }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell((row+i), column, "red")
        colorACell(row, column, "red")
        colorACell(row, (column+i), "white")
        BoatDirection = "vertical"
        })
      }
    }
    else if (BoatDirection === "vertical") {
      if (column === 9) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell((row+i), column, "red")
        colorACell(row, column, "red")
        BoatDirection = "vertical"
        })
      }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+i), "red")
        colorACell(row, column, "red")
        colorACell((row+i), column, "white")
        BoatDirection = "horizontal"
        })
      }
    }
  }
}

function makeBoatWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (BoatDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (BoatDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

function setBoatPosition() {
  if (setBoat) {-
    $("#patrolboat").off()
    $(".cell").off()
  }
  boatFinalCellClicked1.push(prevRowBoat, prevColBoat)
    if (BoatDirection === "horizontal") {
      prevRowBoat2 = prevRowBoat
      prevColBoat = prevColBoat + 1
      boatFinalCellClicked2.push(prevRowBoat2, prevColBoat)
      boatFinalPositionandDirection.push(boatFinalCellClicked1, boatFinalCellClicked2)
      board[boatFinalPositionandDirection[0][0]][boatFinalPositionandDirection[0][1]] = 1
      board[boatFinalPositionandDirection[1][0]][boatFinalPositionandDirection[1][1]] = 1
      console.log("hort");
    }
    else if (BoatDirection === "vertical") {
      console.log("vert");
     prevRowBoat2 = prevRowBoat + 1
     prevColBoat2 = prevColBoat
     boatFinalCellClicked2.push(prevRowBoat2, prevColBoat2)
     boatFinalPositionandDirection.push(boatFinalCellClicked1, boatFinalCellClicked2)
     board[boatFinalPositionandDirection[0][0]][boatFinalPositionandDirection[0][1]] = 1
     board[boatFinalPositionandDirection[1][0]][boatFinalPositionandDirection[1][1]] = 1
    }
    BoatDirection = "horizontal"
    freshMoveBoat = true
    BoatClicked = false
    setBoat = false
}

var freshMoveBoat = true
var BoatClicked = false
var setBoat = false
var prevRowBoat, prevColBoat
var prevRowBoat2, prevColBoat2
var boatFinalPositionandDirection= []
var boatFinalCellClicked1 = []
// variables to record which cells were clicked. this is the initial cell clicked then using the info of this cell, we determine the position of the other cell i.e. boatFinalCellClicked2
var boatFinalCellClicked2 = []

$("#patrolboat").append("Patrol boat").click(function () {
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {

      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveBoat) {
          makeBoat(row, column, 2);
          prevRowBoat = row
          prevColBoat = column
          freshMoveBoat = false;

        } else {
          makeBoatWhite(prevRowBoat, prevColBoat, 2);
          prevRowBoat = row
          prevColBoat = column
          makeBoat(row, column, 2);
          freshMoveBoat = false
        }
      })
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      if (row === 9 && column === 9) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
  BoatClicked = true
})

var SubDirection = "horizontal"

function makeSub(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 8) {
      colorACell(row, (column+i), "red")
    }
    else if (column === 8 || column === 9) {
      colorACell((row+i), column, "red")
      SubDirection = "vertical"
    }
    if (SubDirection === "horizontal") {
      if (row === 9 || row === 8) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+i), "red")
        colorACell(row, column, "red")
        SubDirection = "horizontal"
      })
    }
      else  {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell((row+i), column, "red")
          colorACell(row, column, "red")
          colorACell(row, (column+i), "white")
          SubDirection = "vertical"
        })
      }
    }
    else if (SubDirection === "vertical") {
      if (column < 8) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          colorACell((row+i), column, "white")
          SubDirection = "horizontal"
        })
      }
    }
  }
}

function makeSubWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (SubDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (SubDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

function setSubPosition () {
  if (setSub) {
    $("#sub").off()
    $(".cell").off()
  }

  SubFinalClicked1.push(prevRowSub, prevColSub)
  if (SubDirection === "horizontal") {
    prevRowSub2 = prevRowSub
    prevColSub2 = prevColSub + 1
    SubFinalClicked2.push(prevRowSub2, prevColSub2)
    prevRowSub3 = prevRowSub
    prevColSub3 = prevColSub +2
    SubFinalClicked3.push(prevRowSub3, prevColSub3)
    SubFinalPosition.push(SubFinalClicked1, SubFinalClicked2, SubFinalClicked3)
  }

  else if (SubDirection === "vertical") {
    prevRowSub2 = prevRowSub + 1
    prevColSub2 = prevColSub
    SubFinalClicked2.push(prevRowSub2, prevColSub2)
    prevRowSub3 = prevRowSub + 2
    prevColSub3 = prevColSub
    SubFinalClicked3.push(prevRowSub3, prevColSub3)
    SubFinalPosition.push(SubFinalClicked1, SubFinalClicked2, SubFinalClicked3)
  }
  for (var row = 0; row < ROW; row++) {
    for (var column = 0; column < COLUMN; column++) {
      if (row === SubFinalPosition[0][0] && column === SubFinalPosition[0][1]) {
        board[row][column] = 1
      }
      if (row === SubFinalPosition[1][0] && column === SubFinalPosition[1][1]) {
        board[row][column] = 1
      }
      if (row === SubFinalPosition[2][0] && column === SubFinalPosition[2][1]) {
        board[row][column] = 1
      }
    }
  }
}


var freshMoveSub = true
var SubClicked = false
var setSub = false
var prevRowSub, prevColSub;
var SubFinalPosition = []
var SubFinalClicked1 = []
var SubFinalClicked2 = []
var prevRowSub2, prevColSub2
var SubFinalClicked3 = []
var prevRowSub3, prevColSub3;

$("#sub").append("Submarine").click(function () {
    SubClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveSub) {
        makeSub(row, column, 3)
        prevRowSub = row
        prevColSub = column
        freshMoveSub = false
        }
        else {
          makeSubWhite(prevRowSub, prevColSub, 3)
          makeSub(row, column, 3)
          prevRowSub = row
          prevColSub = column
          freshMoveSub = false
        }
      })
      if (board[row][column] === 1) {
        $("#" +"R"+row+"C"+column).off()
      }
      if (row >= 8 && column >= 8) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
})

var DestroyerDirection = "horizontal"

function makeDestroyer(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 8) {
      colorACell(row, (column+i), "red")
    }

    else if (column === 8 || column === 9) {
      colorACell((row+i), column, "red")
      DestroyerDirection = "vertical"
    }
    if (DestroyerDirection === "horizontal") {
      if (row === 9 || row === 8) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+i), "red")
        colorACell(row, column, "red")
        DestroyerDirection = "horizontal"
      })
    }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell((row+i), column, "red")
          colorACell(row, column, "red")
          colorACell(row, (column+i), "white")
          DestroyerDirection = "vertical"
        })
      }
    }
    else if (DestroyerDirection === "vertical") {
      if (column < 8) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          colorACell((row+i), column, "white")
          DestroyerDirection = "horizontal"
        })
      }
    }
  }

}

function makeDestroyerWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (DestroyerDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (DestroyerDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

function setDestroyerPosition() {
  if(setDestroyer) {
    $("#destroyer").off()
    $(".cell").off()
  }

  DestroyerFinalClicked1.push(prevRowDestroyer, prevColDestroyer)
    if (DestroyerDirection === "horizontal") {
      prevRowDestroyer2 = prevRowDestroyer
      prevColDestroyer2 = prevColDestroyer + 1
    DestroyerFinalClicked2.push(prevRowDestroyer2, prevColDestroyer2)
      prevRowDestroyer3 = prevRowDestroyer
      prevColDestroyer3 = prevColDestroyer +2
    DestroyerFinalClicked3.push(prevRowDestroyer3, prevColDestroyer3)
    DestroyerFinalPosition.push(DestroyerFinalClicked1, DestroyerFinalClicked2, DestroyerFinalClicked3)
  }

    else if (DestroyerDirection === "vertical") {
      prevRowDestroyer2 = prevRowDestroyer + 1
      prevColDestroyer2 = prevColDestroyer
    DestroyerFinalClicked2.push(prevRowDestroyer2, prevColDestroyer2)
      prevRowDestroyer3 = prevRowDestroyer + 2
      prevColDestroyer3 = prevColDestroyer
    DestroyerFinalClicked3.push(prevRowDestroyer3, prevColDestroyer3)
    DestroyerFinalPosition.push(DestroyerFinalClicked1, DestroyerFinalClicked2, DestroyerFinalClicked3)
    }
    for (var row = 0; row < ROW; row++) {
      for (var column = 0; column < COLUMN; column++) {
        if (row === DestroyerFinalPosition[0][0] && column === DestroyerFinalPosition[0][1]) {
          board[row][column] = 1
        }
        if (row === DestroyerFinalPosition[1][0] && column === DestroyerFinalPosition[1][1]) {
          board[row][column] = 1
        }
        if (row === DestroyerFinalPosition[2][0] && column === DestroyerFinalPosition[2][1]) {
          board[row][column] = 1
        }
      }
    }
}

var setDestroyer = false
var DestroyerClicked = false
var freshMoveDestroyer = true
var prevRowDestroyer, prevColDestroyer;
var DestroyerFinalPosition = []
var DestroyerFinalClicked1 = []
var DestroyerFinalClicked2 = []
var prevRowDestroyer2, prevColDestroyer2
var DestroyerFinalClicked3 = []
var prevRowDestroyer3, prevColDestroyer3;

$("#destroyer").append("Destroyer").click(function () {
  DestroyerClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveDestroyer) {
        makeDestroyer(row, column, 3)
        prevRowDestroyer = row
        prevColDestroyer = column
        freshMoveDestroyer = false
        }
        else {
          makeDestroyerWhite(prevRowDestroyer, prevColDestroyer, 3)
          makeDestroyer(row, column, 3)
          prevRowDestroyer = row
          prevColDestroyer = column
          freshMoveDestroyer = false
        }
     })
     if (board[row][column] === 1) {
         $("#" +"R"+row+"C"+column).off()
     }
     if (row >= 8 && column >= 8) {
       $("#" +"R"+row+"C"+column).off()
     }
   }
 }
})

var CarrierDirection = "horizontal"
function makeCarrier(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 7) {
      colorACell(row, (column+i), "red")
    }
    else if (column >= 7) {
      colorACell((row+i), column, "red")
      CarrierDirection = "vertical"
    }
    if (CarrierDirection === "horizontal") {
      if (row >= 7) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          CarrierDirection = "horizontal"
        })
      }

      else if (row < 7) {
        $("#" +"R"+row+"C"+column).click(function () {
            colorACell((row+i), column, "red")
            colorACell(row, column, "red")
            colorACell(row, (column+i), "white")
            CarrierDirection = "vertical"
          })
      }
    }
    else if (CarrierDirection === "vertical") {
      if (column < 7) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          colorACell((row+i), column, "white")
          CarrierDirection = "horizontal"
        })
      }
    }
  }
}

function makeCarrierWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (CarrierDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (CarrierDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

function setCarrierPosition () {
  if (setCarrier) {
    $("#carrier").off()
    $(".cell").off()
  }
  CarrierFinalClicked1.push(prevRowCarrier, prevColCarrier)
   if (CarrierDirection === "horizontal") {
     prevRowCarrier2 = prevRowCarrier
     prevColCarrier2 = prevColCarrier + 1
     CarrierFinalClicked2.push(prevRowCarrier2, prevColCarrier2)
     prevRowCarrier3 = prevRowCarrier
     prevColCarrier3 = prevColCarrier +2
     CarrierFinalClicked3.push(prevRowCarrier3, prevColCarrier3)
     prevRowCarrier4 = prevRowCarrier
     prevColCarrier4 = prevColCarrier + 3
     CarrierFinalClicked4.push(prevRowCarrier4, prevColCarrier4)
     CarrierFinalPosition.push(CarrierFinalClicked1, CarrierFinalClicked2, CarrierFinalClicked3, CarrierFinalClicked4)
 }
 else if (CarrierDirection === "vertical") {
     prevRowCarrier2 = prevRowCarrier + 1
     prevColCarrier2 = prevColCarrier
   CarrierFinalClicked2.push(prevRowCarrier2, prevColCarrier2)
     prevRowCarrier3 = prevRowCarrier + 2
     prevColCarrier3 = prevColCarrier
   CarrierFinalClicked3.push(prevRowCarrier3, prevColCarrier3)
     prevRowCarrier4 = prevRowCarrier + 3
     prevColCarrier4 = prevColCarrier
    CarrierFinalClicked4.push(prevRowCarrier4, prevColCarrier4)
    CarrierFinalPosition.push(CarrierFinalClicked1, CarrierFinalClicked2, CarrierFinalClicked3, CarrierFinalClicked4)
 }
 for (var row = 0; row < ROW; row++) {
   for (var column = 0; column < COLUMN; column++) {
     if (row === CarrierFinalPosition[0][0] && column === CarrierFinalPosition[0][1]) {
       board[row][column] = 1
     }
     if (row === CarrierFinalPosition[1][0] && column === CarrierFinalPosition[1][1]) {
       board[row][column] = 1
     }
     if (row === CarrierFinalPosition[2][0] && column === CarrierFinalPosition[2][1]) {
       board[row][column] = 1
     }
     if (row === CarrierFinalPosition[3][0] && column === CarrierFinalPosition[3][1]) {
       board[row][column] = 1
     }
   }
 }
}

var CarrierClicked = false
var setCarrier = false
var freshMoveCarrier = true
var prevRowCarrier, prevColCarrier;
var CarrierFinalPosition = []
var CarrierFinalClicked1 = []
var CarrierFinalClicked2 = []
var CarrierFinalClicked3 = []
var CarrierFinalClicked4 = []
var prevRowCarrier2, prevColCarrier2
var CarrierFinalClicked3 = []
var prevRowCarrier3, prevColCarrier3;
var CarrierFinalClicked4 = []
var prevRowCarrier4, prevColCarrier4;

$("#carrier").append("Carrier").click(function () {
    CarrierClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveCarrier) {
        makeCarrier(row, column, 4)
        prevRowCarrier= row
        prevColCarrier= column
        freshMoveCarrier = false
        }
        else {
          makeCarrierWhite(prevRowCarrier, prevColCarrier, 4)
          makeCarrier(row, column, 4)
          prevRowCarrier = row
          prevColCarrier = column
          freshMoveCarrier = false
        }
      })
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      if (row >= 7 && column >=7) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
})

var BattleshipDirection = "horizontal"

function makeBattleship(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 6) {
      colorACell(row, (column+i), "red")
      }
    else {
    colorACell((row+i), column, "red")
    BattleshipDirection = "vertical"
      }

    if (BattleshipDirection === "horizontal") {
      if (row >=6) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          // colorACell (row, column, "red")
          BattleshipDirection = "horizontal"
        })
      }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell((row+i), column, "red")
          colorACell (row, column, "red")
          colorACell(row, (column+i), "white")
          BattleshipDirection = "vertical"
        })
      }
    }
  else if (BattleshipDirection === "vertical") {
    $("#" +"R"+row+"C"+column).click(function () {
      if (column < 6) {
        colorACell(row, (column+i), "red")
        colorACell (row, column, "red")
        colorACell((row+i), column, "white")
        BattleshipDirection = "horizontal"
        }
      })
    }
  }
}


function makeBattleshipWhite (row, column, length) {
  for (var i = 0; i < length; i++) {
    if (BattleshipDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (BattleshipDirection === "vertical")
      colorACell((row+i), column, "white")
  }
}

function setBattleshipPosition() {
  if (setBattleship) {
    $("#battleship").off()
    $(".cell").off()
  }
  BattleshipFinalClicked1.push(prevRowBattleship, prevColBattleship)
    if (BattleshipDirection === "horizontal") {
      prevRowBattleship2 = prevRowBattleship
      prevColBattleship2 = prevColBattleship + 1
    BattleshipFinalClicked2.push(prevRowBattleship2, prevColBattleship2)
      prevRowBattleship3 = prevRowBattleship
      prevColBattleship3 = prevColBattleship + 2
    BattleshipFinalClicked3.push(prevRowBattleship3, prevColBattleship3)
    prevRowBattleship4 = prevRowBattleship
    prevColBattleship4 = prevColBattleship + 3
    BattleshipFinalClicked4.push(prevRowBattleship4, prevColBattleship4)
    prevRowBattleship5 = prevRowBattleship
    prevColBattleship5 = prevColBattleship + 4
    BattleshipFinalClicked5.push(prevRowBattleship5, prevColBattleship5)
    BattleshipFinalPosition.push(BattleshipFinalClicked1, BattleshipFinalClicked2, BattleshipFinalClicked3, BattleshipFinalClicked4, BattleshipFinalClicked5)
    console.log(BattleshipFinalPosition);
    }

    else if (BattleshipDirection === "vertical") {
      prevRowBattleship2 = prevRowBattleship + 1
      prevColBattleship2 = prevColBattleship
    BattleshipFinalClicked2.push(prevRowBattleship2, prevColBattleship2)
      prevRowBattleship3 = prevRowBattleship + 2
      prevColBattleship3 = prevColBattleship
    BattleshipFinalClicked3.push(prevRowBattleship3, prevColBattleship3)
      prevRowBattleship4 = prevRowBattleship + 3
      prevColBattleship4 = prevColBattleship
    BattleshipFinalClicked4.push(prevRowBattleship4, prevColBattleship4)
      prevRowBattleship5 = prevRowBattleship + 4
      prevColBattleship5 = prevColBattleship
    BattleshipFinalClicked5.push(prevRowBattleship5, prevColBattleship5)
    BattleshipFinalPosition.push(BattleshipFinalClicked1, BattleshipFinalClicked2, BattleshipFinalClicked3, BattleshipFinalClicked4, BattleshipFinalClicked5)
    }
        // console.log(BattleshipFinalPosition);
    for (var row = 0; row < ROW; row++) {
      for (var column = 0; column < COLUMN; column++) {
        if (row === BattleshipFinalPosition[0][0] && column === BattleshipFinalPosition[0][1]) {
          board[row][column] = 1
        }
        if (row === BattleshipFinalPosition[1][0] && column === BattleshipFinalPosition[1][1]) {
          board[row][column] = 1
        }
        if (row === BattleshipFinalPosition[2][0] && column === BattleshipFinalPosition[2][1]) {
          board[row][column] = 1
        }
        if (row === BattleshipFinalPosition[3][0] && column === BattleshipFinalPosition[3][1]) {
          board[row][column] = 1
        }
        if (row === BattleshipFinalPosition[4][0] && column === BattleshipFinalPosition[4][1]) {
          board[row][column] = 1
        }
      }
    }
    // console.log(board);
}
var freshMoveBattleship = true
var BattleshipClicked = false
var setBattleship = false
var prevColBattleship, prevRowBattleship;
var BattleshipFinalPosition = []
var BattleshipFinalClicked1 = []
var BattleshipFinalClicked2 = []
var BattleshipFinalClicked3 = []
var BattleshipFinalClicked4 = []
var prevRowBattleship2, prevColBattleship2
var BattleshipFinalClicked3 = []
var prevRowBattleship3, prevColBattleship3;
var BattleshipFinalClicked4 = []
var prevRowBattleship4, prevColBattleship4;
var BattleshipFinalClicked5 = []
var prevRowBattleship5, prevColBattleship5;

$("#battleship").append("Battleship").click(function () {
  BattleshipClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveBattleship) {
        makeBattleship (row, column, 5)
        prevRowBattleship = row
        prevColBattleship = column
        freshMoveBattleship  = false
        }
        else {
          makeBattleshipWhite (prevRowBattleship, prevColBattleship, 5)
          makeBattleship (row, column, 5)
          prevRowBattleship = row
          prevColBattleship = column
          freshMoveBattleship = false
        }
      })
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      if (row >= 6 && column >=6) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
})

// function shipRotation(length, direction) {
//   if (direction === "horizontal") {
//     colorACell(row, (column+i), "red")
//     direction = "vertical"
//   }
//   if (direction === "vertical") {
//     colorACell((row+i), column, "red")
//   }
// }
//
// $("#rotate").append("Restart").click(function () {
//   rotate(row, column, length)
//   console.log("restart test");
// })

$("#setship").append("Set Ship").click(function () {
   if (BoatClicked === true) {
     setBoat = true
     setBoatPosition()
   }
  if (SubClicked === true) {
    setSub = true
    setSubPosition()
   }
   if (DestroyerClicked === true) {
     setDestroyer = true
     setDestroyerPosition()
    }
   if (CarrierClicked === true) {
     setCarrier = true
     setCarrierPosition()
   }
   if (BattleshipClicked === true) {
     setBattleship = true
     setBattleshipPosition()
   }
})

var playernumberofpositionsfilled = 0
var playerclickedthisrow, playerclickedthiscol;
$("#start").append("Start").click(function () {
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === 1) {
        playernumberofpositionsfilled += 1
      }
    }
  }
    if (playernumberofpositionsfilled === 17) {
      alert("OFF TO WAR!!")
      $(".cell").off()
      playernumberofpositionsfilled = 0
      for (let comcellrow = 0; comcellrow < ROW; comcellrow++) {
        for (let comcellcolumn = 0; comcellcolumn < COLUMN; comcellcolumn++) {
            $("#" +"R"+comcellrow+"C"+comcellcolumn+".comcell").click(function () {
              playerclickedthisrow = comcellrow
              playerclickedthiscol = comcellcolumn
              PlayerMakeAMove(playerclickedthisrow, playerclickedthiscol)
              computerStrategy()
              computerMove()
            })
        }
      }
    }
    else if (playernumberofpositionsfilled < 17) {
      alert("Some ships have not been placed")
  }
})

$("#restart").append("Restart").click(function () {
  restart()
  console.log("restart test");
})
