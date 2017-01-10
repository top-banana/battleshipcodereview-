var computerBoardForPlayer1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// var player = "human"
// human always starts first
var playernumberofhits = 0
var computernumberofhits = 0
function PlayerMakeAMove(playerclickedthisrow, playerclickedthiscol) {
    if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 0) {
      $("#" +"R"+(playerclickedthisrow)+"C"+(playerclickedthiscol)+".comcell").css("background-color", "black")
    }
    else if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 1) {
      $("#" +"R"+(playerclickedthisrow)+"C"+ (playerclickedthiscol)+".comcell").css("background-color", "yellow")
      computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] = 2
      playernumberofhits += 1
      console.log("player hits");
      console.log(playernumberofhits);
    }
  if (isGameOver()) {
    whoWins()
    $(".cell").off()
    $(".comcell").off()
    alert("Game Over")
  }
}

function computerMove() {
// runs computer strategy
  if(board[computerRowToClick][computerColToClick] === 0) {
  $("#" +"R"+(computerRowToClick)+"C"+(computerColToClick)+".cell").css("background-color", "black")
  computerRowToClick
  computerColToClick
  // check if this is being set back to null value
  }
  else if(board[computerRowToClick][computerColToClick] === 1) {
    $("#" +"R"+(computerRowToClick)+"C"+(computerColToClick)+".cell").css("background-color", "yellow")
    board[computerRowToClick][computerColToClick] = 2
    computernumberofhits += 1
    console.log("test");
    console.log("computer hits");
    console.log(computernumberofhits);
    computerRowToClick
    computerColToClick
    }
  }


var computerRowToClick, computerColToClick;
var computerRowToClick, computerColToClick;
var RandomRowColAlreadyGenerated = []
var RandomRow, RandomCol;
var RandomRowCol = []
var generatefirstrandomnumber = true
var PreviousRandomRowCol = []

function generateRandomRowCol() {
  RandomRow = Math.floor(Math.random() * ROW);
  RandomCol = Math.floor(Math.random() * COLUMN);
  // RandomRowCol.push(RandomRow, RandomCol)
  RandomRowCol = [RandomRow, RandomCol];
  // console.log(RandomRowCol);
}


function computerStrategy () {
  if (generatefirstrandomnumber) {
    generateRandomRowCol()
    computerRowToClick = RandomRow
    computerColToClick = RandomCol
    PreviousRandomRowCol.push(RandomRowCol)
    generatefirstrandomnumber = false
    // console.log("first random rol and col");
    // console.log(RandomRowCol);
  }
  else {
    // from the second random number generated, reset random row and col generated before it
    generateRandomRowCol()
    for (var i = 0; i < PreviousRandomRowCol.length; i++) {
      // console.log(PreviousRandomRowCol.length);
      // console.log(PreviousRandomRowCol);
      while (RandomRow === PreviousRandomRowCol[i][0] && RandomCol === PreviousRandomRowCol[i][1]) {
        // console.log("random number repeated");
        generateRandomRowCol()
      }
      computerRowToClick = RandomRow
      computerColToClick = RandomCol
      // console.log("random number NOt repeated");
    }
    PreviousRandomRowCol.push(RandomRowCol)
    console.log(PreviousRandomRowCol);
    console.log(PreviousRandomRowCol.length);
  }
}


function whoWins() {
  if (playernumberofhits === 17) {
    alert("Humanity FTW")
    return true
  }
  else if (computernumberofhits === 17) {
    // console.log(computernumberofhits);
    alert("Losing faith in humanity")
    return false
  }
}

function isGameOver() {
  if (playernumberofhits === 17 || computernumberofhits === 17) {
    return true
  }
  else if (playernumberofhits < 17 || computernumberofhits < 17){
    return false
  }
}

function restart() {
  BoatDirection = "horizontal"
  SubDirection = "horizontal"
  DestroyerDirection = "horizontal"
  CarrierDirection = "horizontal"
  BattleshipDirection = "horizontal"
  playernumberofhits = 0
  computernumberofhits = 0
  computerBoardForPlayer1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  board = [
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
  $(".cell").css("background-color", "white")
  $(".comcell").css("background-color", "white")
  console.log(computerBoardForPlayer1);
  console.log(board);
}
