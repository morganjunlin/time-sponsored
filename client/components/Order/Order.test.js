import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Order from './Order';

describe('testing Order component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Order />).length).toEqual(1)
	})

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Order />).length).toEqual(1)
	})

	it('should grab a snapshot of the component.', ()=> {
		const component = renderer.create(<Order />)
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})

})
