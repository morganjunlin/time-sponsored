import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Order from './Order';

describe('testing Order component', ()=> {

	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<Order />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Order />).length).toEqual(1)
	})

	it('should check state ', ()=> {
		let wrapper = shallow(<Order />)
		expect.assertions(1)
		expect(wrapper.state().route).toEqual('delivery')	
	})

	it('should check state ', ()=> {
		let wrapper = shallow(<Order />)
		expect.assertions(1)
		wrapper.instance().route_changer("pickup")
		expect(wrapper.state().route).toEqual('pickup')		
	})

	it('should check state ', ()=> {
		let wrapper = shallow(<Order />)
		expect.assertions(3)
		expect(wrapper.instance().view_controller("delivery")).toBeTruthy()	
		expect(wrapper.instance().view_controller("pickup")).toBeTruthy()	
		expect(wrapper.instance().view_controller("schedule")).toBeTruthy()		
	})
})
