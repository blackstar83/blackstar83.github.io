var frWeather1 = new XMLHttpRequest();

frWeather1.open('GET', '//api.wunderground.com/api/3e4c6be39f528295/conditions/q/MN/Franklin.json', true);

frWeather1.send();

frWeather1.onload = function () {

    var weatherInfo1 = JSON.parse(frWeather1.responseText);
    console.log(weatherInfo1);

    document.getElementById('hi').innerHTML = weatherInfo1.current_observation.temp_f;
    document.getElementById('windspd').innerHTML = weatherInfo1.current_observation.wind_mph;
    document.getElementById('precip').innerHTML = weatherInfo1.current_observation.precip_1hr_in;
    document.getElementById('cclimate').innerHTML = weatherInfo1.current_observation.icon;
    document.getElementById('wchill').innerHTML = weatherInfo1.current_observation.windchill_f;

    var icon_path = weatherInfo1.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);

    if(found>=0) {
        icon_path = icon_path.replace("http","https");
    }
    document.getElementById('wicon').src = weatherInfo1.icon_path;
};
