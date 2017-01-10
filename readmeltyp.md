A readme.md file with explanations of the technologies used,
the approach taken, installation instructions, unsolved problems, etc.

Game: Battleship
Why this game was chosen: classic javascript game to strengthen programming fundamentals

key problems faced:
- trying to define functions that could be used in diff cases : i.e. there could have been one making ship function but I have 5 (one for each ship).. but then again each ship has different edge cases (in terms of placement) so it might be hard to define one global function to ensure that all the different edge cases are being met
- var board = [
[0,3,3,0]
[3,1,1,3]
[0,3,3,0]
[0,0,0,0]
]
- in the MVP, the ships can be placed side by side or above each other. however, the rules of battleship forbids this. so i have been finding out a way to block the perimeter of the boat to prevent this from happening.
--> i have figured out a solution but it is not implemented my MVP code. the final code will look something like the one written below (many other edge cases to consider)
- on this note, the edge cases are dealt with with alot of IF statements... is there a more elegant way of dealing with it?

function placeHorizontalBoatPerimeter(row, column, length) {

  for (var i = 0; i < length; i++) {
      // all top right hand corners will obey this formula
    if (row === 0 && column === 0) {
      board[row+1][column+i] = 3
      board[row][column+2] = 3
    }
    // all top left hand corners will obey this
    if (row === 0 && column === 8) {
      board[(row+1)][(column+i)] = 3
      board[row][(column-1)] = 3
    }
}
  else if {
    // disregarding edge cases
      board[(row+1)][column+i] = 3
      board[row-1][column+i] = 3
      board[row][column-1] = 3
      board[row][column+2] = 3
  }
}
- another MAJOR problem with the current game is that after a while, the co-ordinates will be logged in wrongly. as such, when u want to change the position of the current ship, after its placement, the existing ship does not disappear. from what i can tell, in one case, the program is registering the wrong direction.
--> the complexity of this game lies in the fact that there maybe alot of directional and/or positional changes which, if code is not written properly, can be hard to track or be tracked wrongly. --> basically my bad code is being polluted after awhile

- when the game is being played, the user clicks trigger a move made by the computer. although the computers move is being updated simultaneously during the initial stage, after maybe 50 over clicks made by the user, the computers board might not be updated during certain rounds. so the computer's board will always have more blank spaces than the users board.


key technologies used: javascript and jquery
main objective: learn how to organize data within 2D array and manipulate it
--> 2D arrays are effective so that each cell can be individually identified

Appproach taken:
each ship is defined by for functions
1. makeShip function --> places the boat on the grid
--> enables u to change the position and direction of the ship every time u click the grid
--> includes conditionals to prevent "illegal" placement of ships.
--> also tracks the direction of the ship
2. makeShipWhite function --> "erases" the existing boat if u decide to change its position
3. setShipPosition function ---> prevents u from placing the boat again by switching off the cell and ship button
--> returns the final co-ordinates of the ship
4. a click event that triggers the above functions

key areas that i still need to work on :
1. clean code
 ---> how to write functions in a more concise way..currently each function does too many things and takes care of too many conditionals.. that is why debugging WHY the directional changes are being read wrongly is so difficult

 2. writing pseudocode which thinks about the functions required and not just pseudocode that takes into account features or gameplay

In summary:
1. I am now able to handle 2D arrays comfortably
2. I am better at:
- debugging sources of error (although I still may not know how to systematically fix the error)
- passing variables between functions i.e. seeing how things link
- DOM manipulation
3. In trying to place perimeters around the ship, I have been exposed to understanding patterns within games which is useful for generalizing things
