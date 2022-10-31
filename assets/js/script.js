// 1. build a function to save data through local storage
// 2. build a refresher so it does not delete after refreshing browser
// 3. use moment to indicate time of the day on Headers
// 4. using background for different times of the Hour

//storage for saved data
$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        console.lot(time, value);
    })
})

//keeping data on text area even after reload of page
$("#nine").children("textarea").val(localStorage.getItem("nine"));
$("#ten").children("textarea").val(localStorage.getItem("ten"));
$("#eleven").children("textarea").val(localStorage.getItem("eleven"));
$("#twelve").children("textarea").val(localStorage.getItem("twelve"));
$("#one").children("textarea").val(localStorage.getItem("one"));
$("#two").children("textarea").val(localStorage.getItem("two"));
$("#three").children("textarea").val(localStorage.getItem("three"));
$("#four").children("textarea").val(localStorage.getItem("four"));
$("#five").children("textarea").val(localStorage.getItem("five"));

// setting date for header and for loop on time for background color
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM, Do"));

var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
updateTime();

function updateTime() {
    var currentTime = moment().format("H");
    for(var i = 0; i < timeOfDay.length; i++) {
        if (parseInt(timeOfDay[i]) > currentTime) {
            $("#" + timeOfDay[i]).attr("style", "background-color:green");
        } else if (parseInt(timeOfDay[i]) < currentTime) {
            $("#" + timeOfDay[i]).attr("style", "background-color: lightgray");
        } else if (parseInt(timeOfDay[i]) == currentTime) {
            $("#" + timeOfDay[i]).attr("style", "background-color: red");
        }
  }
}
