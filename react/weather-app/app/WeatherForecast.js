import React, { Component, Fragment } from "react";
import Card from "./Card";

import { getForecast } from "../api/getApiDatas";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      forecastList: []
    };
  }

  componentDidMount() {
    var id = this.props.params.woeid;
    this.setState({ id: id }, () => {
      this.loadWeatherForecast();
    });
  }

  loadWeatherForecast() {
    getForecast(this.state.id).then(response => {
      this.setState({ forecastList: response });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.forecastList.map(data => {
          return (
            <Card
              key={data.id}
              img={data.weather_state_abbr}
              date={data.applicable_date}
              min_T={data.min_temp}
              max_T={data.max_temp}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default WeatherForecast;
