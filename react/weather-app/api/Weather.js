import axios from "axios";

export const getLocations = city => {
  return axios
    .get(`/api/location/search/?query=${city}`)
    .then(({ data }) => data);
};

export const getForecast = id => {
  return axios
    .get(`/api/location/${id}`)
    .then(({ data }) => data.consolidated_weather);
};
