import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App.js';

describe('testing App component', ()=> {

	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})

	it('should increment by 1', ()=> {
		const wrapper = shallow(<App />)
		wrapper.find('[id="counter_button"]').simulate('click')
		expect(wrapper.state()).toEqual({data : null, counter: 1})
		wrapper.find('[id="counter_button"]').simulate('click')
		expect(wrapper.state().counter).toEqual(2)
	})

	it('should check the component did mount method.', ()=> {
		const wrapper2 = shallow(<App />)
		wrapper2.update()
		expect(wrapper2.state().data)
		.toEqual({
		  "userId": 1,
		  "id": 1,
		  "title": "delectus aut autem",
		  "completed": false
		})
	})
})

	