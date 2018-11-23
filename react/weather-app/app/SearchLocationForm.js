import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchLocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="form-group row">
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <input
            type="text"
            placeholder="City Name"
            value={this.state.input}
            onChange={this.handleChange}
            className="form-control"
          />{" "}
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Link
            to={`/location/${this.state.input}`}
            className="btn btn-primary"
          >
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchLocationForm;
