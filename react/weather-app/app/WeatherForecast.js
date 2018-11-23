import React, { Component, Fragment } from "react";
import Card from "./card";
import axios from "axios";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      datas: []
    };
  }

  componentDidMount() {
    this.setState({ id: this.props.params.woeid }, () => {
      this.apiCall();
    });
  }

  apiCall() {
    axios
      .get("/api/location/" + this.state.id)
      .then(response => {
        console.log("forecast <> ", response.data);
        let datas = [];
        for (var key in response.data.consolidated_weather) {
          datas.push(response.data.consolidated_weather[key]);
        }
        this.setState({ datas: datas }, () => {
          console.log("Forecast datas  -> ", this.state.datas);
        });
      })
      .catch(err => {
        console.log("Error in API call", err);
      });
  }
  render() {
    return (
      <Fragment>
        {this.state.datas.map(data => {
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
