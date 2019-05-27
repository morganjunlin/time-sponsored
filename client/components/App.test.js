import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

describe('testing App component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})

	it('should render componentDidMount()', ()=> {
		let wrapper = shallow(<App />)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'getRestaurantData')
		instance.componentDidMount()
		expect(instance.getRestaurantData).toHaveBeenCalledTimes(1)
	})

	it('should render state', ()=> {
		let wrapper = shallow(<App />)
		expect(wrapper.state().isModalOpen).toEqual(false)
		expect(wrapper.state().data).toEqual(null)
		wrapper.instance().toggleModal()
		expect(wrapper.state().isModalOpen).toEqual(true)
	})
})
