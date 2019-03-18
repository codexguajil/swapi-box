import React from 'react';
import { iterateHelper } from '../Methods/helpers';
import { shallow } from 'enzyme';

describe("helpers", () => {
    describe("iterateHelper", () => {
        let wrapper;
        let mockPath;
        let array;

        beforeEach(() => {
            array = [
                {
                    name: 'ed',
                    model: 'v2'
                },
                {
                    name: 'voks',
                    model: 'sapien'
                },
                {
                    name: 'thumper',
                    model: 'rainier'
                }
            ]
            mockPath = 'vehicle'
            let testProps = {array, mockPath}
            wrapper = shallow( <iterateHelper {...testProps} />)
        })

        it("should return the correct array of objects based on params", () => {

            expect(wrapper).toMatchSnapshot()
        })
    })
})