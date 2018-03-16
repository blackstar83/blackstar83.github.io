var frWeather1 = new XMLHttpRequest();

frWeather1.open('GET', '//api.wunderground.com/api/3e4c6be39f528295/conditions/q/MN/Franklin.json', true);

frWeather1.send();

frWeather1.onload = function () {

    var weatherInfo1 = JSON.parse(frWeather1.responseText);
    console.log(weatherInfo);

    document.getElementById('hi').innerHTML = weatherInfo1.current_observation.temperature_string;
    document.getElementById('windspd').innerHTML = weatherInfo1.current_observation.wind_mph;
    document.getElementById('precip').innerHTML = weatherInfo1.current_observation.precip_today_string;


};
