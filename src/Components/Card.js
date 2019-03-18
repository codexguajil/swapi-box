import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Card extends Component {
    constructor() {
        super();
        this.state={
            clicked: false,
        }
    }

    render() {
        if(this.props.data.Homeworld) {
            return (
                <div className="card">
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.Homeworld}</p>
                    <p>{this.props.data.Population}</p>
                    <p>{this.props.data.species}</p>
                    <p>{this.props.data.language}</p>
                    <button>favorite</button>
                </div>
            )
        } else if(this.props.data.terrain) {
            return (
                <div className="card">
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.terrain}</p>
                    <p>{this.props.data.population}</p>
                    <p>{this.props.data.climate}</p>
                    <p className="residents">
                    {this.props.data.residents.map(resident => {
                        return <p className="resident">{resident.name}</p>
                    })}
                    </p>
                    <button>favorite</button>
                </div>
            )
        } else if(this.props.data.model) {
            return (
                <div className="card">
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.model}</p>
                    <p>{this.props.data.class}</p>
                    <p>{this.props.data.passengers}</p>
                    <button>favorite</button>
                </div>
            )
        }
    }
}

Card.propTypes = {
    data: propTypes.object.isRequired
}