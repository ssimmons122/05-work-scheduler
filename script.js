// html and css first
var todayDate = moment().format('LLLL');
  $("#currentDay").html(todayDate); 

$(document).ready(function () {
//saveBtn
$(".saveBtn").on("click", function () {
  var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
})

  //local storage data
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));


function timeTracker() {
  //number of hours.
  let timeNow = moment().hour(LTS) 
  console.log(timeNow);
}
 
  //loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour, timeNow);

    //if the current hour is greater than the block hour, add the past class
    if (blockHour > timeNow) {
      $(this).addClass("past");
    }

    //if the current hour is less than the block hour, add the present class
    else if (blockHour === timeNow) {
      $(this).addClass("present");
    }

    //if the current hour is equal to the block hour, add the present class
    else {
      $(this).addClass("future");
    }
    timeTracker(); //game on
  });
});
