import React, { Component } from 'react';
import { FilmScroller } from './FilmScroller';
import { Header } from './Header';
import { CardsContainer } from './CardsContainer';
import { ButtonsContainer } from './ButtonsContainer';
import { fetchFilms, fetchApi, iterateFetch } from '../Methods/apiCalls';
import { fetchHomeWorlds, fetchSpecies } from '../Methods/people';
import { iterateHelper } from '../Methods/helpers';
import { promises } from 'fs';

class App extends Component {
  constructor() {
    super();
    this.state={
      films: [],
      count: 0,
      data: [],
    }
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

  fetchAnything = async (value) => {  
    const url = `https://swapi.co/api/${value}`
    try {
      const parsedResponse = await fetchApi(url)
      const objectValues = await iterateHelper(parsedResponse.results, value)
      if(objectValues[0].species) {
        let homeWorlds = await fetchHomeWorlds(objectValues)
        let species = await fetchSpecies(objectValues)
        homeWorlds.forEach((person,i) => {
          person.species = species[i].name
          person.language = species[i].language
        })
        this.setState({data: homeWorlds})
        } else if(objectValues[0].terrain) {
          let residents = await this.fetchResidents(objectValues)
          let newPlanets = this.resetResidents(objectValues, residents)
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

  render() {
    const { films, data } = this.state
    return (
      <div className="App">
        <Header />
        <ButtonsContainer fetchAnything={this.fetchAnything}/>
        <CardsContainer data={data}/>
        <FilmScroller films={films}/>
      </div>
    );
  }
}

export default App;
