import React from 'react';

export const iterateHelper = async (array, path) => {
    // console.log(array)
    if (path === 'people') {
        try {
            let objectValues = array.map(item => {
                return {name: item.name,
                        home: item.homeworld,
                        species: item.species[0]
                }
            })
            return await objectValues
        } catch(error) {
            return error.message
        }
    } else if (path === 'planets') {
        try {
            let objectValues = array.map(item => {
                return {name: item.name,
                        terrain: item.terrain,
                        population: item.population,
                        climate: item.climate,
                        residents: item.residents
                }
            })
            return await objectValues
        } catch(error) {
            return error.message
        }
    } else if (path === 'vehicles') {
        try {
            let objectValues = array.map(item => {
                return {name: item.name,
                        model: item.model,
                        class: item.vehicle_class,
                        passengers: item.passengers
                }
            })
            return await objectValues
        } catch(error) {
            return error.message
        }
    }
    
}