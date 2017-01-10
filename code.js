$("#patrolboat").append("Patrol boat").click(function () {
  // after patrolboat is clicked AND
  // when mouse moves to the board, 2 squares on the board are highlighted --> only horizontally
  // when board is clicked, the position of the boat is fixed there
  // when mouse is double clicked, you can move the position of the boat
  // also checking function to determine if other ships are in the area;
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      function colorACell(row,column,color) {
        $("#" +"R"+row+"C"+column).css("background-color", color)
      }

      $("#" +"R"+row+"C"+column).on("click", function() {
        colorACell(row,column,"#FF3399")
        colorACell(row,(column+1),"#FF3399")
        clickedhort.push(row, column, row,(column+1))
      }).click(function () {
        colorACell((clickedhort[0]), (clickedhort[1]), "white")
        colorACell((clickedhort[2]), (clickedhort[3]), "white")
        colorACell(row,column,"#FF3399")
        colorACell(row,(column+1),"#FF3399")
        clickedhort = []
      })

      $("#" +"R"+row+"C"+column).dblclick(function () {
        colorACell(row,column,"#FF3399")
        colorACell((row+1),column,"#FF3399")
        colorACell(row,(column+1),"white")
        clickedvert.push(row,column,(row+1),column)
        console.log(clickedvert)})
        .click(function () {
        colorACell((clickedvert[0]), (clickedvert[1]), "white")
        colorACell((clickedvert[2]), (clickedvert[3]), "white")
        clickedvert = []
        }).click(function () {
        colorACell(row,column,"#FF3399")
        colorACell(row,(column+1),"#FF3399")
        colorACell((row+1),column,"white")
        clickedhort.push(row,column,row,(column+1))
      }).click(function () {
        colorACell((clickedhort[0]), (clickedhort[1]), "white")
        colorACell((clickedhort[2]), (clickedhort[3]), "white")
        colorACell(row,column,"#FF3399")
        colorACell(row,(column+1),"#FF3399")
      })

    if ($("#" +"R"+row+"C"+9)) {
      $("#" +"R"+row+"C"+9).click(function() {
        colorACell(row,9,"#FF3399")
        colorACell((row+1),9,"#FF3399")
      })
    }
    }
  }
})
