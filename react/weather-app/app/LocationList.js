import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      datas: [],
      ban: false
    };
  }

  componentDidMount() {
    this.setState({ city: this.props.params.city }, () => {
      this.apiCall();
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.city !== prevProps.params.city) {
      console.log("¡CHANGED!");
      this.setState({ city: this.props.params.city }, () => {
        this.apiCall();
      });
    }
  }
  apiCall() {
    console.log("city -> ", this.state.city);
    axios
      .get("/api/location/search/?query=" + this.state.city)
      .then(response => {
        let datas = [];
        for (var key in response.data) {
          datas.push(response.data[key]);
        }
        if (datas.length != 0) {
          this.setState({ datas: datas, ban: false }, () => {
            console.log("this.state.datas -> ", this.state.datas);
          });
        } else {
          this.setState({ ban: true });
        }
      })
      .catch(err => {
        console.log("Error in API call", err);
      });
  }

  render() {
    return (
      <div>
        {this.state.datas && !this.state.ban ? (
          <ul className="list-group">
            {this.state.datas.map(location => {
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
        {this.state.ban ? <p> NO search results </p> : null}
      </div>
    );
  }
}

export default LocationList;
