import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Sponsor from './Sponsor';

describe('testing Sponsor component', ()=> {

	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<Sponsor />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Sponsor />).length).toEqual(1)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<Sponsor />)
		expect(wrapper.find('#sponsor-container').text()).toEqual('Sponsored restaurants in your area')
	})

})
