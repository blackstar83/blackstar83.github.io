var tData = new XMLHttpRequest();

tData.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

tData.send();

tData.onload = function () {
    var gvWeather = JSON.parse(tData.responseText);
    console.log(gvWeather);

    document.getElementById('cityname').innerHTML = gvWeather.towns["3"].name;
    document.getElementById('motto').innerHTML = gvWeather.towns["3"].motto;
    document.getElementById('yfounded').innerHTML = gvWeather.towns["3"].yearFounded;
    document.getElementById('pop').innerHTML = gvWeather.towns["3"].currentPopulation;
    document.getElementById('rain').innerHTML = gvWeather.towns["3"].averageRainfall;
    document.getElementById('events').innerHTML = gvWeather.towns["3"].events;
}
