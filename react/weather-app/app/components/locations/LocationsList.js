import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/api';

export function LocationsList(props) {
    if (props.locations.length === 0) {
        return <p>No locations available</p>
    }

    return (
        <ul className="list-group">
            {props.locations.map(location => {
                return (
                    <li className="list-group-item" key={location.woeid}>
                        <div className="d-flex">
                            <div className="p-2 w-100">
                                {location.title}
                            </div>
                            <div className="p-2 flex-shrink-1">
                                <Link className="btn btn-primary" to={`/weather/${location.woeid}`}>See weather forecast</Link>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
