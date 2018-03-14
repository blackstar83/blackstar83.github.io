var tData = new XMLHttpRequest();

tData.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

tData.send();

tData.onload = function a() {
    var frWeather = JSON.parse(tData.responseText);
    console.log(frWeather);

    document.getElementById('cityname1').innerHTML = frWeather.towns["0"].name;
    document.getElementById('motto1').innerHTML = frWeather.towns["0"].motto;
    document.getElementById('yfounded1').innerHTML = frWeather.towns["0"].yearFounded;
    document.getElementById('pop1').innerHTML = frWeather.towns["0"].currentPopulation;
    document.getElementById('rain1').innerHTML = frWeather.towns["0"].averageRainfall;

    var grWeather = JSON.parse(tData.responseText);
    console.log(grWeather);

    document.getElementById('cityname2').innerHTML = grWeather.towns["1"].name;
    document.getElementById('motto2').innerHTML = grWeather.towns["1"].motto;
    document.getElementById('yfounded2').innerHTML = grWeather.towns["1"].yearFounded;
    document.getElementById('pop2').innerHTML = grWeather.towns["1"].currentPopulation;
    document.getElementById('rain2').innerHTML = grWeather.towns["1"].averageRainfall;

    var spWeather = JSON.parse(tData.responseText);
    console.log(spWeather);

    document.getElementById('cityname3').innerHTML = spWeather.towns["3"].name;
    document.getElementById('motto3').innerHTML = spWeather.towns["3"].motto;
    document.getElementById('yfounded3').innerHTML = grWeather.towns["3"].yearFounded;
    document.getElementById('pop3').innerHTML = spWeather.towns["3"].currentPopulation;
    document.getElementById('rain3').innerHTML = spWeather.towns["3"].averageRainfall;
}
