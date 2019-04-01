import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnything } from '../../utils/apiCalls';
import { addPeople, clickedButton } from '../../actions';
import { peopleCleaner, homeWorldData, speciesData, speciesDataCleaner, combineData } from '../../utils/helpers';

export class PeopleButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false,
        }
    }

    handleClick = (e) => {
        this.setState({clicked: !this.state.clicked})
        this.fetchPeople();
    }

    fetchPeople = async () => {
      const url = 'https://swapi.co/api/people/'
      const rawData = await fetchAnything(url)
      const cleanData = peopleCleaner(rawData.results);
      const peopleHomeData = await homeWorldData(cleanData);
      const peopleSpeciesData = await speciesData(cleanData);
      const speciesNames = speciesDataCleaner(peopleSpeciesData);
      const finalPeopleObjects = combineData(cleanData, peopleHomeData, speciesNames)
      this.props.addPeople(finalPeopleObjects)
      this.props.clickedButton('people')
    }

    render() {
        return (
            <button id={this.state.clicked.toString()}
                    onClick={this.handleClick}
                    value={this.props.value}
            >{this.props.value}
            </button>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
  addPeople: (people) => dispatch(addPeople(people)),
  clickedButton: (value) => dispatch(clickedButton(value))
})

export default connect(null, mapDispatchToProps)(PeopleButton);