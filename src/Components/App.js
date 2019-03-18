import React, { Component } from 'react';
import { FilmScroller } from './FilmScroller';
import { Header } from './Header';
import { CardsContainer } from './CardsContainer';
import { ButtonsContainer } from './ButtonsContainer';
import { fetchFilms, fetchApi, iterateFetch } from '../Methods/apiCalls';
import { iterateHelper } from '../Methods/helpers';
import './App.css';
import { promises } from 'fs';

class App extends Component {
  constructor() {
    super();
    this.state={
      films: [],
      count: 0,
      data: [],
    }
    this.fetchPeople = this.fetchPeople.bind(this)
    this.fetchSpecies = this.fetchSpecies.bind(this)
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    this.fetchFilms(url)
  }

  async fetchFilms(url) {
    try {
      const films = await fetchFilms(url)
      this.setState({films, count: films.length})
    } catch(error) {
      console.log(error.message)
    }
  }

  async fetchPeople(value) {  
    console.log(value)
    const url = `https://swapi.co/api/${value}`
    try {
      const parsedResponse = await fetchApi(url)
      const objectValues = await iterateHelper(parsedResponse.results, value)
      console.log('objectVAlues:', objectValues)
      if(objectValues[0].species) {
        let homeWorlds = await this.fetchHomeWorlds(objectValues)
        let species = await this.fetchSpecies(objectValues)
        homeWorlds.forEach((person,i) => {
          person.species = species[i].name
          person.language = species[i].language
        })
        console.log(homeWorlds);
        this.setState({data: homeWorlds})
        } else if(objectValues[0].terrain) {
          let residents = await this.fetchResidents(objectValues)
          let newPlanets = this.resetResidents(objectValues, residents)
          console.log(newPlanets)
          this.setState({data: newPlanets})
        } else if(objectValues[0].model) {
          this.setState({data: objectValues})
        }
      } catch(error) {
        console.log(error.message)
      }
    }

  resetResidents = (planetValues, residents) => {
    let resetPlanetValues = planetValues.map((planet,i) => {
      return {...planet, residents: residents[i]}
    })
    return resetPlanetValues
  }

  async fetchResidents(planets) {
    try {
      let newPlanets = planets.map(planet => {
        let fetchedResidents = this.fetchUrls(planet.residents)
        return fetchedResidents
      })
      return await Promise.all(newPlanets)
    }catch(error) {
      console.log(error.message)
    }
  }

  async fetchUrls(urls) {
    if(urls.length > 0) {
      let fetchedUrls = await urls.map(url => {
        return fetchApi(url)
      })
      return await Promise.all(fetchedUrls)
    } else {
      urls.push({name:'unknown'})
      return urls;
    }
  }

  async fetchHomeWorlds(people) {
    console.log('people', people)
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

  async fetchSpecies(people) {
    console.log(people)
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

  render() {
    const { films, data } = this.state
    return (
      <div className="App">
        <Header />
        <ButtonsContainer fetchPeople={this.fetchPeople}/>
        <CardsContainer data={data}/>
        <FilmScroller films={films}/>
      </div>
    );
  }
}

export default App;
