const fetch = require('node-fetch');

const fetchWeatherForCity = async (city) => {
  if (city === undefined) {
    throw 'City was not provided';
  }

  const response = await fetch(`http://api.trybe.com/weather/${city}`);
  const json = await response.json();

  if (json.weatherCondition === 'rain') {
    return '🌧';
  } else if (json.weatherCondition === 'cloud') {
    return '⛅️';
  } else if (json.weatherCondition === 'sun') {
    return '🌞';
  } else {
    throw 'Weather condition not found';
  }
};

module.exports = { fetchWeatherForCity };
