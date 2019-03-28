import React, { Component } from 'react';
import FilmScroller from '../FilmScroller/FilmScroller';
import { fetchFilms, fetchApi, iterateFetch } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { addMovies } from '../../actions';

class App extends Component {

  componentDidMount = () => {
    this.fetchFilms();
  }
  
  fetchFilms = async () => {
    const url = 'https://swapi.co/api/films/';
    try {
      const films = await fetchFilms(url);
      this.props.addMovies(films.results);
    } catch(error) {
      throw error.message;
    }
  }

  render() {
    const { movies } = this.props
    console.log(movies)
    return (
        <div className="App">
          <FilmScroller />
        </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);