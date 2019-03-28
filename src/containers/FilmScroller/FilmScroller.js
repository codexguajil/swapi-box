import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmScroller extends Component {
  
  renderScroll = () => {
    return this.props.movies.map(movie => {
      return (
       <h1 key={movie.episode_id}>{movie.title}</h1>
      )
    })
  }

   render() {
     console.log(this.props)
     return (
     <div className="film">
      {this.renderScroll()}     
     </div>
     )
   } 
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(FilmScroller);