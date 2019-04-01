import React, { Component } from 'react';
import Card from '../../Components/Card';
import { connect } from 'react-redux';

export class CardsContainer extends Component {
  
  render() {
    const { people, clickedButton } = this.props
    return (
            <div id="cards-container">
              {
                clickedButton === 'people' &&
                 people.map((person,i) => {
                  return <Card data={person} key={i} />
                })
              }
            </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  people: state.people,
  clickedButton: state.clickedButton,
})

export default connect(mapStateToProps)(CardsContainer);