import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false,
        }
    }

    handleClick = (e) => {
        this.setState({clicked: !this.state.clicked})
        this.props.fetch(e.target.value)
    }

    render() {
        return (
            <button id={this.state.clicked.toString()}
                    onClick={this.handleClick}
                    value={this.props.value}
            >{this.props.value}
            </button>
        )
    }
}

Button.propTypes = {
    fetch: propTypes.func.isRequired
}