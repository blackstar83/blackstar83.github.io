var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/3e4c6be39f528295/conditions/q/CA/San_Francisco.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('hi').innerHTML = weatherInfo.current_observation.temperature_string;


}
