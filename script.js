$("#currentDay").text(
  luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  })
);

// var hour = $(".hour");
// var timeBlock = $(".time-block");
var agenda = [];

function timeBlockEl() {
  let hourEl = luxon.DateTime.local().toLocaleString({
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let formattedHour = parseInt(hourEl[0] + hourEl[1]);

  // console.log(hourEl);

  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id"));
    console.log(this);
    if (formattedHour > currentHour) {
      $(this).addClass("past");
    } else if (currentHour === formattedHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
  let agenda = $(this).siblings(".hour").text();
  let usrTxt = $(this).siblings("#input").val();
  localStorage.setItem(agenda, usrTxt);
});

timeBlockEl();
storeEl();

// init();
// function init() {
//   //  Get stored agenda from localStorage
//   //  Parsing the JSON string to an object
//   var storedAgenda = JSON.parse(localStorage.getItem("agenda"));
//   // If agenda was retrieved from localStorage, update the agenda array
//   if (storedAgenda !== null) {
//     agenda = storedAgenda;
//   }
//   // Render agenda to the DOM
//   renderAgenda();
// }
//
// //  Render a new li for each todo
// for (var i = 0; i < agenda.length; i++) {
//   var agenda = storedAgenda[i];
//
//   var li = document.createElement("li");
//   li.textContent = todo;
//   li.setAttribute("data-index", i);
//
//   var button = document.createElement("button");
//
//   button.textContent = "Complete";
//   li.appendChild(button);
//   storedAgenda.appendChild(li);
// }
