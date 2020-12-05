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







