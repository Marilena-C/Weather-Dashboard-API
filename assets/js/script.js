// Page structure formatting
$("#input-data")
  .css({ width: "100%", "margin-top": 5, "margin-bottom": 5 })
  .addClass("input-lg")
  .addClass("flex-fill");

$("#search-button")
  .css({ "margin-top": 10, "margin-bottom": 10 })
  .addClass("btn-primary")
  .addClass("btn-block");
  
  $("hr").css("border-width", 2, "background", blue);

  $("#current")
  .css("height", 180)
  .css("padding-left", 10)
  .addClass("border border-dark");

  $("#forecast").css("padding-left", 16);

  //Declare variables
var queryURL1;
var queryURL2;
var searchList = [];
var APIKey = "0f3257cf00e8079a51b47a6783f5300f";

// Add moment date in format "D/M/YYYY"
var searchDate = [];
var searchLocation;
var weatherCond = {};
var days = [0, 1, 2, 3, 4, 5];
var info = ["date", "iconUrl", "temp", "windSpd", "humidity"];
var obj = {};

for (var i of days) {
  for (var j of info) {
    obj[j] = {};
  }
  weatherCond[i] = obj;
  obj = {};
}

weatherCond[0].date = moment().format("D/M/YYYY");
// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
console.log(weatherCond);
  
 //Create list search of dates into API response
for (var i = 0; i < 5; i++) {
  searchDates[i] = moment()
    .add([i + 1], "days")
    .format("YYYY-MM-DD 12:00:00")
    .toString();
  weatherCond[i + 1].date = moment()
    .add([i + 1], "days")
    .format("D/M/YYYY");
}
 
// Add click event on dynamically generated buttons -> using event delegation 
//$('#search-button').on('click', '.search-location', requestMapsData);
$("#search-button").click(function (event) {
  event.preventDefault();
  var str = $("#search-input").val();
  if (str != "") {
    $("#search-input").val("");
    createContent(str);
  } else {
    return;
  }
});


// Search history
function histBtn(element) {
  let text = element.innerText;
    createContent(text);
}

renderHistory();
createHistButtons();
// display location data
function displayMapsData({ Lat, Lon, Temp }) {
  
  // let { City, lat, long, country } = location response;  // obj destructuring 




function requestWeatherData() {
  const weatherCond = $(this).text();
  var lat;
  var lon;
  $.ajax({
    url: url,
    method: 'GET'
  }).then(response => displayMapsData(response)); 
  // es6 arrow function
}