$("#patrolboat").append("Patrol boat").click(function () {
  for (var index = 0; index < boardasarr.length; index++) {
    console.log($("#" +index));
    $("#" +index).mouseenter(function () {
      $("#" +index).css("background-color", "red");
    })
  }
})

when mouse entered the grid, NOTHING HAPPENED
why --> because the for loop passes only the reference i to the callback function
it does not pass the value of i (i.e. i = 5)
when mouseenter was triggered and the function requested the value of i from the for loop, by that time the loop had already finished running, so it returned the value of 100 to index, which is undefined
