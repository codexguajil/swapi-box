import React from 'react';
import {shallow} from 'enzyme';
import {CardsContainer} from './CardsContainer'; 

describe('CardsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardsContainer />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})