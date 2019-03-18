import React, { Component } from 'react';
import Button from './Button';
import propTypes from 'prop-types';

export const ButtonsContainer = (props) => {
    
        return (
            <div id="buttons-container">
                <Button value="people" fetch={props.fetchPeople}/>
                <Button value="planets" fetch={props.fetchPeople}/>
                <Button value="vehicles" fetch={props.fetchPeople}/>
            </div>
        )
}

ButtonsContainer.propTypes = {
    fetchPeople: propTypes.func.isRequired
}