import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Calendar from './Calendar';
import moment from 'moment';

describe('testing Calendar component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect.assertions(1)
		expect(shallow(<Calendar />).length).toEqual(1)
	})

	//enzyme .text() .html()
	it('should render text', ()=> {
		let wrapper = shallow(<Calendar />)
		expect.assertions(3)
		expect(wrapper.find('.order-schedule-items-later-month').text()).toEqual(moment().format("MMM YYYY"))
		expect(wrapper.find('.order-schedule-items-later-days span').length).toEqual(7)
		expect(wrapper.find('#order-today').text()).toEqual(moment().format("DD"))
	})

	//To check filler()
	it('should run filler', ()=> {
		let wrapper = shallow(<Calendar />)
		expect.assertions(1)
		expect(wrapper.instance().filler().length).toEqual(Number(moment().format('e')))
	})

})
