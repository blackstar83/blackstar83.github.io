var tData = new XMLHttpRequest();

tData.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

tData.send();

tData.onload = function () {
    var gvWeather = JSON.parse(tData.responseText);
    console.log(gvWeather);

    document.getElementById('cityname').innerHTML = gvWeather.towns["1"].name;
    document.getElementById('motto').innerHTML = gvWeather.towns["1"].motto;
    document.getElementById('yfounded').innerHTML = gvWeather.towns["1"].yearFounded;
    document.getElementById('pop').innerHTML = gvWeather.towns["1"].currentPopulation;
    document.getElementById('rain').innerHTML = gvWeather.towns["1"].averageRainfall;
    document.getElementById('events').innerHTML = gvWeather.towns["1"].events;
}
