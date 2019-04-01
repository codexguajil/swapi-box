import React from 'react';
import {shallow} from 'enzyme';
import {App} from './App'; 

describe('App', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn()
    wrapper = shallow(
      <App />
    )
  })

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should call fetchRandomFilm upon mounting', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchRandomFilm');
    instance.componentDidMount();

    expect(instance.fetchRandomFilm).toHaveBeenCalled();
    mockFn.mockClear()
  })
})