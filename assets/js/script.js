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
