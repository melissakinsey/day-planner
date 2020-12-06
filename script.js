// var timeBlock = $(".time-block");

// for timeBlock(var i = 0; i < timeBlock; i++ ) {
//     [
//     
//         
// ]
//     
// }
// var dt = DateTime.local(day.month.day);
// $("#currentDay").text(DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate());

$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));

// // Store
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

var hour = $(".hour");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");
var agenda = [];

// // init();
// function init() {
//     // Get stored agenda from localStorage
//     // Parsing the JSON string to an object
//     var storedAgenda = JSON.parse(localStorage.getItem("agenda"));
//   
//     // If agenda was retrieved from localStorage, update the agenda array
//     if (storedAgenda !== null) {
//       agenda = storedAgenda;
//     }
//   
//     // Render todos to the DOM
//     // renderAgenda();
//   }
//   
// function renderAgenda() {
//   // Clear todoList element and update todoCountSpan
//   timeBlock.innerHTML = "";
//   todoCountSpan.textContent = todos.length;
// 
//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];
// 
//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);
// 
//     var button = document.createElement("button");
//     button.textContent = "Complete";
// 
//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }



let currentTime = luxon.DateTime.local().toLocaleString({ hour: "2-digit", minute: '2-digit', hour12: false});

console.log(currentTime);




