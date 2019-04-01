import React from 'react';
import Favorites from '../containers/Favorites/favorites';

export const Header = () => {

    return (
        <div id="header">
            <h1>SWAPI-Box</h1>
            <Favorites />
        </div>
    )
}