function change() {
    var city = $('#city-weather').val();
    $('.city-input').val(city);
    $.getJSON(
      "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&APPID=c8edf9ab2ca118096215e9e36fbc7a20",
      function (data) {
          var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
          var temp = Math.floor(data.main.temp);
          var weather = data.weather[0].main;
          $('.icon').prop('src', icon);
          document.getElementById('temp1').innerHTML = temp;
          document.getElementById('weather1').innerHTML = weather;
      }
    );
}
