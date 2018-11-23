import axios from "axios";

export const getLocations = city => {
  return axios.get(`/api/location/search/?query=${city}`).then(response => {
    let datas = [];
    for (var key in response.data) {
      datas.push(response.data[key]);
    }
    return datas;
  });
};

export const getForecast = id => {
  return axios.get(`/api/location/${id}`).then(response => {
    let datas = [];
    for (var key in response.data.consolidated_weather) {
      datas.push(response.data.consolidated_weather[key]);
    }
    return datas;
  });
};
