import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MenuPageNav from './MenuPageNav';

describe('testing MenuPageNav component', ()=> {

	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<Order />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<MenuPageNav />).length).toEqual(1)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<MenuPageNav />)
		expect.assertions(3)
		expect(wrapper.find('.menuPageNav-menu').text()).toEqual('Menu')
		expect(wrapper.find('.menuPageNav-about').text()).toEqual('About')
		expect(wrapper.find('.menuPageNav-reviews').text()).toEqual('Reviews')
		// expect(wrapper.find('#text2').html()).toEqual('<div id="text2">This is James</div>')
	})

})
