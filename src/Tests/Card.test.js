import React from 'react';
import Card from '../Components/Card';
import { shallow } from 'enzyme';

describe("Card", () => {
    let mockProps = {
        name: 'edgar',
        Homeworld: 'earth',
        occupation: 'student'
    }

    let wrapper = <Card data={mockProps} />

    it("should render a card with the correct passed in props", () => {
        expect(wrapper).toMatchSnapshot();
    })
})