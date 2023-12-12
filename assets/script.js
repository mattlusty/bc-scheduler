var today = dayjs();

$("#currentDay").text(today);

var container = $(".container");

function createTimeBlock(hour, timeText) {
  var timeBlock = $("<div>").addClass("time-block row").attr("id", id);
  var hour = $("<div>").addClass("hour col-2").text(timeText);
  var textArea = $("textarea>").addClass("col");
  var button = $("<button>").addClass("saveBtn col-2").text("SAVE");
  timeBlock.append(hour).append(textArea).append(button);
  return timeBlock;
}
