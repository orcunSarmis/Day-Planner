// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var description = $(".description");
var today = moment();// This line stores moment Datetime data in today variable.

// These lines display formated datetime on the page.
$("#currentDay").text(today.format("dddd, MMMM Do"));


$(document).ready(function(){
    $(".saveBtn").click(function(){
       var str = $(this).siblings(".description").val();
       var hour = $(this).parent().attr("id")
        localStorage.setItem("description", "str");
        localStorage.setItem(hour, str);
    });
});




// $('#hour-9 .description').val(localStorage.getItem('hour-9'));******** to get 

// 
// saveBtn.on("click", function () {
//     $("description").val("");
//     console.log("works");
// })