import React, { Component, Fragment } from "react";
import { FormattedDate } from "react-intl";

const Card = props => {
  return (
    <div className="adjust">
      <div className="card text-center">
        <img
          className=" my-image"
          src={`https://www.metaweather.com/static/img/weather/${
            props.img
          }.svg`}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            <FormattedDate
              value={new Date(props.date)}
              day="numeric"
              month="short"
            />{" "}
          </p>
          <p className="card-text"> Min: {props.min_T.toFixed(2)}°C</p>
          <p className="card-text"> Max: {props.max_T.toFixed(2)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
