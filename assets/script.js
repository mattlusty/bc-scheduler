var today = dayjs();

$("#currentDay").text(today);

var container = $(".container");
var times = [
  [9, "9AM"],
  [10, "10AM"],
  [11, "11AM"],
  [12, "12PM"],
  [13, "1PM"],
  [14, "2PM"],
  [15, "3PM"],
  [16, "4PM"],
  [17, "5PM"],
];

function createTimeBlock(hour, timeText) {
  var timeBlock = $("<div>").addClass("time-block row").attr("id", hour);
  var hour = $("<div>").addClass("hour col-2").text(timeText);
  var textArea = $("<textarea>").addClass("col");
  var button = $("<button>").addClass("saveBtn col-2").text("SAVE");
  timeBlock.append(hour).append(textArea).append(button);
  return timeBlock;
}

times.forEach((time) => {
  console.log("time");
  var timeBlock = createTimeBlock(time[0], time[1]);
  container.append(timeBlock);
});
