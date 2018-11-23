import React, { Component, Fragment } from "react";
import SearchLocationForm from "./SearchLocationForm";
import LocationList from "./LocationList";
import WeatherForecast from "./WeatherForecast";

import { Route } from "react-router";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Weather App </h1>
        <SearchLocationForm />
        <Route
          path="/location/:city"
          render={({ match }) => <LocationList params={match.params} />}
        />
        <br />
        <Route
          path="/forecast/:woeid"
          render={({ match }) => <WeatherForecast params={match.params} />}
        />
      </Fragment>
    );
  }
}

export default App;
