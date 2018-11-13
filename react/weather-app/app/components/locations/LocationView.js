import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocationsList } from './LocationsList';
import * as api from '../../utils/api';

export class LocationView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: null,
            locations: null
        };

        this.updateQuery = this.updateQuery.bind(this);
        this.searchLocations = this.searchLocations.bind(this);
    }
    searchLocations(e) {
        e.preventDefault();

        api.loadLocations(this.state.query).then
            ((locations) => this.setState(() => ({ locations })))
    }
    updateQuery(e) {
        const query = e.currentTarget.value;
        this.setState(() => ({ query }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.searchLocations}>
                    <div className="input-group">
                        <input
                            name="query"
                            className="form-control"
                            placeholder="Search location"
                            type="text"
                            value={this.props.match.params.query}
                            onChange={this.updateQuery}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </div>
                    </div>
                </form>


                {!!this.state.locations && <LocationsList locations={this.state.locations} />}
            </div>
        );
    }
}

LocationView.contextTypes = {
    router: PropTypes.object.isRequired
}