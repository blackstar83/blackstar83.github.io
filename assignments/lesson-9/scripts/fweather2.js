var frWeather2 = new XMLHttpRequest();

frWeather2.open('GET', 'http://api.wunderground.com/api/3e4c6be39f528295/forecast10day/q/MN/Franklin.json', true);

frWeather2.send();

frWeather2.onload = function () {

    var weatherInfo2 = JSON.parse(frWeather2.responseText);
    console.log(weatherInfo2);

    document.getElementById('hi1').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('hi2').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('hi3').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('hi4').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    document.getElementById('hi5').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
    document.getElementById('hi6').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
    document.getElementById('hi7').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
    document.getElementById('hi8').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
    document.getElementById('hi9').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    document.getElementById('hi10').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["9"].high.fahrenheit;

    document.getElementById('lo1').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('lo2').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
    document.getElementById('lo3').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
    document.getElementById('lo4').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
    document.getElementById('lo5').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
    document.getElementById('lo6').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
    document.getElementById('lo7').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["6"].low.fahrenheit;
    document.getElementById('lo8').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
    document.getElementById('lo9').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
    document.getElementById('lo10').innerHTML = weatherInfo2.forecast.simpleforecast.forecastday["9"].low.fahrenheit;

};
