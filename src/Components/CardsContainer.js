import React from 'react';
import Card from './Card';
import propTypes from 'prop-types';

export const CardsContainer = ({data}) => {
    return (
            <div id="cards-container">
            {data.length > 0 &&
                data.map(data => {
                    return <Card data={data}/>
                })
            }
            </div>
    )
}

CardsContainer.propTypes = {
    data: propTypes.array.isRequired
}