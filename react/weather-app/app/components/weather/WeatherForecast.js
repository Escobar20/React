import React, { Component } from 'react';
import { ForecastList } from './ForecastList';
import * as api from '../../utils/api';


export class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherForecast: null,
      loading: true
    };
  }
  updateWeatherForecast(weatherForecast) {
    return this.setState(() => ({
      weatherForecast, loading: false
    }));
  }
  componentDidMount() {
    const woeid = this.props.match.params.woeid;
    api.loadWeatherForecast(woeid).then(
      (data) => this.updateWeatherForecast(data)
    );
  }
  render() {
    const { loading, weatherForecast } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {weatherForecast && <h4>{weatherForecast.title}</h4>}
        {weatherForecast && <p>Forecast for {weatherForecast.consolidated_weather.length} days</p>}
        {weatherForecast && <ForecastList list={weatherForecast.consolidated_weather} />}
      </div>
    );
  }
}