import React, { Component } from 'react';

export default class Card extends Component {

    render() {
      return (
        <div className="card">
          <h1>{this.props.data.name}</h1>
          <h3>{this.props.data.homeworld}</h3>
          <h4>{this.props.data.species}</h4>
          <h4>{this.props.data.population}</h4>
        </div>
      )
    }
  }