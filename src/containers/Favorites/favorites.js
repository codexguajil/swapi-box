import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FavoritesButton extends Component {

  render() {
    return (
      <button>View Favorites<span>0</span></button>
    )
  }
}

export const mapStateToProps = (state) => ({
  movie: state.movie,
})

export default connect(mapStateToProps)(FavoritesButton);