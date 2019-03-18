import React, { Component } from 'react';
import Button from './Button';
import propTypes from 'prop-types';

export const ButtonsContainer = (props) => {
    
        return (
            <div id="buttons-container">
                <Button value="people" fetch={props.fetchAnything}/>
                <Button value="planets" fetch={props.fetchAnything}/>
                <Button value="vehicles" fetch={props.fetchAnything}/>
            </div>
        )
}

ButtonsContainer.propTypes = {
    fetchPeople: propTypes.func.isRequired
}