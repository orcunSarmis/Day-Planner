// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var description = $(".description");
var today = moment();// This line stores moment Datetime data in today variable.
var body = $("body");

// These lines display formated datetime on the page.
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentTime = new Date().getHours(); // This method give the hours as number and store in currentTime.

// These store user inputs in the local storage.
$(document).ready(function(){
    $(".saveBtn").click(function(){
       var str = $(this).siblings(".description").val(); //Takew inputs from texteria and buttons which same level under div parent.
       var hour = $(this).parent().attr("id") // and added with id.
        // localStorage.setItem("description", "str"); // Set inputs in local storage.
        localStorage.setItem(hour, str);

    });
    
    // These lines will give colors in the fields.
    $(".time-block").each(function(index) {    
        var notedHour = parseInt($(this).attr("id").split("-")[1]); // This line split the hour from #id.
       
        if (notedHour < currentTime) {
            $(this).addClass("past");
        }else if (currentTime === notedHour){
            $(this).addClass("present");
        }else {
            $(this).addClass("future");
        }
    });

});

window.addEventListener("load", function(){
    $(".time-block").each(function(){
        var dataAttr = $(this).attr("id");
        // console.log(dataAttr);
        var userNote = localStorage.getItem(dataAttr);

        var currentElNotes = $(this).children([1]);
        currentElNotes.val(userNote);
    })
});

