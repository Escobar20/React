import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getLocations } from "../api/getApiDatas";

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      locationsList: [],
      error: false
    };
  }

  componentDidMount() {
    this.setState({ city: this.props.params.city }, () => {
      this.loadLocationList();
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.city !== prevProps.params.city) {
      this.setState({ city: this.props.params.city }, () => {
        this.loadLocationList();
      });
    }
  }

  loadLocationList() {
    getLocations(this.state.city).then(response => {
      if (response.length != 0) {
        this.setState({ locationsList: response, error: false });
      } else {
        this.setState({ error: true });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.locationsList && !this.state.error ? (
          <ul className="list-group">
            {this.state.locationsList.map(location => {
              return (
                <li key={location.woeid} className="list-group-item">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <p className="">{location.title}</p>
                    </li>
                    <li className="list-inline-item right">
                      <Link
                        to={`/forecast/${location.woeid}`}
                        className="btn btn-primary"
                      >
                        See forecast
                      </Link>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        ) : null}
        {this.state.error ? <p> NO search results </p> : null}
      </div>
    );
  }
}

export default LocationList;
