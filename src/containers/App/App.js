import React, { Component } from 'react';
import FilmScroller from '../FilmScroller/FilmScroller';
import { fetchAnything } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { addMovie } from '../../actions';
import { ButtonsContainer } from '../../Components/ButtonsContainer';
import { Header } from '../../Components/Header';
import CardsContainer from '../CardsContainer/CardsContainer';

export class App extends Component {

  componentDidMount = () => {
    this.fetchRandomFilm();
  }
  
  fetchRandomFilm = async () => {
    const url = 'https://swapi.co/api/films/';
    const randomNum = Math.floor(Math.random() * 6);
    try {
      const films = await fetchAnything(url);
      this.props.addMovie(films.results[randomNum]);
    } catch(error) {
      throw error.message;
    }
  }

  render() {
    return (
        <div className="App">
          <Header />
          <FilmScroller />
          <ButtonsContainer />
          <CardsContainer />
        </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movie: state.movie,
  people: state.people,
})

export const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);