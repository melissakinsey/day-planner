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
  var hourEl = luxon.DateTime.local().toLocaleString({
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
function storeEl() {
  $(".hour").each(function () {
    let currentHour = $(this).text();
    let storedTxt = localStorage.getItem(currentHour);
    if (storedTxt !== null) {
      $(this).siblings("textarea").val(storedTxt);
    }
  });
}
timeBlockEl();
storeEl();
