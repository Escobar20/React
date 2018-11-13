var axios = require('axios');

export const loadLocations = (query) => {
  const encodedURI = window.encodeURI(`/api/location/search/?query=${query}`);

  return axios.get(encodedURI)
    .then((response) => response.data);
};

export const loadWeatherForecast = (location) => {
  const url = `/api/location/${location}/`;

  return axios.get(url)
    .then((response) => response.data);
}
