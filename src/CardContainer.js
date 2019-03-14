import React, { Component } from 'react';

export default class CardContainer extends Component {
    constructor() {
        super();
        this.state={
            clickedValue: '',
        }
    }

    render() {
        return (
            <div id="buttons-container">
                <button>People</button>
                <button>Planets</button>
                <button>Vehicles</button>
            </div>
        )
    }
}