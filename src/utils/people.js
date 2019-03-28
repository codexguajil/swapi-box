import React from 'react';
import { fetchApi } from './apiCalls';

  export const fetchHomeWorlds = async (people) => {
    let homes = people.map(person => {
       return fetchApi(person.home)
    })
    let allHomes = await Promise.all(homes)
    let homeValues = allHomes.map((home,i) => {
      return {
        name: people[i].name,
        Homeworld: home.name,
        Population: home.population
      }
    })
    return homeValues
  }

  export const fetchSpecies = async (people) => {
    let species = people.map(person => {
      return fetchApi(person.species)
    })
    let allSpecies = await Promise.all(species)
    let speciesName = allSpecies.map(species => {
      return {
        name: species.name,
        language: species.language
      }
    })
    return speciesName;
  }