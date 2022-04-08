// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var description = $(".description");
var today = moment();// This line stores moment Datetime data in today variable.

// These lines display formated datetime on the page.
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentTime = new Date().getHours();

// These store user inputs in the local storage.
$(document).ready(function(){
    $(".saveBtn").click(function(){
       var str = $(this).siblings(".description").val(); //Takew inputs from texteria and buttons which same level under div parent.
       var hour = $(this).parent().attr("id") // and added with id.
        localStorage.setItem("description", "str"); // Set inputs in local storage.
        localStorage.setItem(hour, str);

    });
    
    // These lines will give colors in the fields.
    $(".time-block").each(function(index) {
        console.log("element", this); // This line gets tim block element
    
        console.log($(this).attr("id").split("-")[1]); // This line split the hour from #id.
        
        
    });

});

// var currentTime = new Date().getTime();

// time-block.classList.remove("future");
// time-block.classList.add("past");
// var currentTime = new Date().getTime();
// $(selector).attr(attribute)