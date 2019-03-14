import React, { Component } from 'react';
import { FilmScroller } from './FilmScroller';
import { Header } from './Header';
import CardContainer from './CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      films: [],
      count: 7,
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({films: data.results}))
  }

  render() {
    console.log(this.state)
    const { films } = this.state
    return (
      <div className="App">
        <Header />
        <CardContainer />
        <FilmScroller films={films}/>
      </div>
    );
  }
}

export default App;
