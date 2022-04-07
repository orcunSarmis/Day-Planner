// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var description = $(".description");
var today = moment();// This line stores moment Datetime data in today variable.

// These lines display formated datetime on the page.
$("#currentDay").text(today.format("dddd, MMMM Do"));

// These store user inputs in the local storage.
$(document).ready(function(){
    $(".saveBtn").click(function(){
       var str = $(this).siblings(".description").val(); //Takew inputs from texteria and buttons which same level under div parent.
       var hour = $(this).parent().attr("id") // and added with id.
        localStorage.setItem("description", "str"); // Set inputs in local storage.
        localStorage.setItem(hour, str);
    });
});




// $('#hour-9 .description').val(localStorage.getItem('hour-9'));******** to get 

// 
// saveBtn.on("click", function () {
//     $("description").val("");
//     console.log("works");
// })