const convertToCelsius = function(temp) {
  newTemp = Math.round(((temp - 32) / 1.8) * 10)/10;
  return newTemp
};

const convertToFahrenheit = function(temp) {
  newTemp = Math.round(((temp * 1.8) + 32) * 10)/10;
  return newTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
