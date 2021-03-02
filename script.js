$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c8edf9ab2ca118096215e9e36fbc7a20",
  function (data) {
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    console.log(icon);
}
);
