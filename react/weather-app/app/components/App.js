import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { LocationView } from './locations/LocationView';
import { WeatherForecast } from './weather/WeatherForecast';


export default class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
            <Link className="navbar-brand" to="/"><h3>Weather's app</h3></Link>
          </nav >
          <Switch>
            <Route path='/location' component={LocationView} />
            <Route path='/weather/:woeid' component={WeatherForecast} />
            <Route exact path='/' render={() => <Redirect to="/location" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

