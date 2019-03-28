import React from 'react';
import FilmScroller from './FilmScroller';
import { shallow } from 'enzyme';

describe ("FilmScroller", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
          <FilmScroller />
        )

        expect(wrapper).toMatchSnapshot()
    })
})