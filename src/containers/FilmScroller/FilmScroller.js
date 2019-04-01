import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmScroller extends Component {

   render() {
     const { movie } = this.props
     return (
     <div className="film">
      {movie.opening_crawl}     
     </div>
     )
   } 
}

export const mapStateToProps = (state) => ({
  movie: state.movie,
})

export default connect(mapStateToProps)(FilmScroller);