// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var description = $(".description");
var today = moment();// This line stores moment Datetime data in today variable.

// These lines display formated datetime on the page.
$("#currentDay").text(today.format("dddd, MMMM Do"));

// 
saveBtn.on("click", function () {
    $("description").val("");
    // console.log("works");
})