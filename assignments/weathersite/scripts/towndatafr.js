var tData = new XMLHttpRequest();

tData.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

tData.send();

tData.onload = function () {
    var frWeather = JSON.parse(tData.responseText);
    console.log(frWeather);

    document.getElementById('cityname').innerHTML = frWeather.towns["0"].name;
    document.getElementById('motto').innerHTML = frWeather.towns["0"].motto;
    document.getElementById('yfounded').innerHTML = frWeather.towns["0"].yearFounded;
    document.getElementById('pop').innerHTML = frWeather.towns["0"].currentPopulation;
    document.getElementById('rain').innerHTML = frWeather.towns["0"].averageRainfall;
    document.getElementById('events').innerHTML = frWeather.towns["0"].events;
}
