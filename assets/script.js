var now = dayjs();

$("#currentDay").text(now.format("dddd"));

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

function createTimeBlock(hour, timeText, content) {
  var timeBlock = $("<div>").addClass("time-block row").attr("id", hour);
  var hour = $("<div>").addClass("hour col-2 p-3").text(timeText);
  var textArea = $("<textarea>").addClass("description col").text(content);
  var button = $("<button>").addClass("saveBtn col-2").text("SAVE");
  timeBlock.append(hour).append(textArea).append(button);
  return timeBlock;
}

function init() {
  var data = localStorage.getItem("data");
  if (data) times = JSON.parse(data);
  render(times);
}

function render(times) {
  times.forEach((time, index) => {
    var timeBlock = createTimeBlock(time[0], time[1], time[2]);
    timeBlock.attr("data-index", index);

    var thisHour = now.hour();
    var diff = time[0] - thisHour;

    var relativeTime;
    if (diff < 0) {
      relativeTime = "past";
    } else if (diff == 0) {
      relativeTime = "present";
    } else {
      relativeTime = "future";
    }
    timeBlock.children(".description").addClass(relativeTime);

    container.append(timeBlock);
  });
}

container.on("click", ".saveBtn", function (event) {
  var timeBlock = $(event.target).parent();
  var index = timeBlock.attr("data-index");
  var value = timeBlock.children(".description").val();
  times[index][2] = value;
  localStorage.setItem("data", JSON.stringify(times));
});

init();
