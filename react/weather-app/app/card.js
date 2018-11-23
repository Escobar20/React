import React, { Component, Fragment } from "react";
import { FormattedDate } from "react-intl";

class Card extends Component {
  render() {
    return (
      <div className="adjust">
        <div className="card text-center">
          <img
            className=" my-image"
            src={`https://www.metaweather.com/static/img/weather/${
              this.props.img
            }.svg`}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              {" "}
              <FormattedDate
                value={new Date(this.props.date)}
                day="numeric"
                month="short"
              />{" "}
            </p>
            <p className="card-text"> Min: {this.props.min_T.toFixed(2)}°C</p>
            <p className="card-text"> Max: {this.props.max_T.toFixed(2)}°C</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
