import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('testing CardContainer component', ()=> {

	it('should grab a snapshot of the component.', ()=> {
		const component = renderer.create(<CardContainer />)
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})
	
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<CardContainer />).length).toEqual(1)
	})

	it('should check state', ()=> {
		let wrapper = shallow(<CardContainer />)
		expect(wrapper.state().group1).toEqual([])
		expect(wrapper.state().group2).toEqual([])
		expect(wrapper.state().group3).toEqual([])
		expect(wrapper.state().group4).toEqual([])
		expect(wrapper.state().current).toEqual('group1')	
	})

	//To check if componentDidMount() calls the 'getSponsoredData' function
	it('should render componentDidMount()', ()=> {
		let wrapper = shallow(<CardContainer />)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'getSponsoredData')
		instance.componentDidMount()
		expect(instance.getSponsoredData).toHaveBeenCalledTimes(1)
	})

	//To check if componentDidMount() calls the 'getSponsoredData' function
	it('should check splitData()', ()=> {
		let wrapper = shallow(<CardContainer />)
		let fake_data = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12}]
		wrapper.instance().splitData(fake_data)
		expect(wrapper.state().group1).toEqual([{id:1},{id:2},{id:3}])
		expect(wrapper.state().group2).toEqual([{id:4},{id:5},{id:6}])
		expect(wrapper.state().group3).toEqual([{id:7},{id:8},{id:9}])
		expect(wrapper.state().group4).toEqual([{id:10},{id:11},{id:12}])
	})

	it('should check sponsor-card-container-button-prev button', ()=> {
		let wrapper = shallow(<CardContainer />)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'changeDataSet')
		wrapper.find('#sponsor-card-container-button-prev').simulate('click')
		expect(instance.changeDataSet).toHaveBeenCalledTimes(1)
		wrapper.find('#sponsor-card-container-button-next').simulate('click')
		expect(instance.changeDataSet).toHaveBeenCalledTimes(2)
	})

	it('should check changeDataSet', ()=> {
		let wrapper = shallow(<CardContainer />)	
		expect(wrapper.instance().changeDataSet('prev')).toEqual(undefined)
		expect(wrapper.instance().changeDataSet('next')).toEqual(undefined)
	})
})
