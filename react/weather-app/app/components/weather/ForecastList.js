import React from 'react';


export function ForecastList(props) {
  return (
    <div className="card-group text-center">
      {props.list.map((forecast) => {
        return (

          <div className="card" key={forecast.id}>
            <div className="card-body">
              <img alt={forecast.weather_state_name} src={`/static/img/weather/${forecast.weather_state_abbr}.svg`} width="40"
                height="40" />
              <h5>{forecast.applicable_date}</h5>
              <div>Min: {forecast.min_temp}° C</div>
              <div>Max: {forecast.max_temp}° C </div>
            </div>
          </div>

        )
      })}
    </div>
  );
}
