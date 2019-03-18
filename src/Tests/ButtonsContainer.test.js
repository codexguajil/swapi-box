import React from 'react';
import { ButtonsContainer } from '../Components/ButtonsContainer';
import { shallow } from 'enzyme';

describe("ButtonsContainer", () => {

    let wrapper = shallow (
        <ButtonsContainer />
    )

    it('should render some people, planet, and vehicles buttons', () => {
        expect(wrapper).toMatchSnapshot()
    })
})