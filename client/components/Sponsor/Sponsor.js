import React from 'react';
import './Sponsor.css';
import {fake_data} from './fake_data';
import CardContainer from './CardContainer/CardContainer';

class Sponsor extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data: null
		}
	}

	componentDidMount(){
		this.setState({data:fake_data})
	}

	render(){
		return(
			<section className="sponsor-container">	
				<p id="sponsor-container">Sponsored restaurants in your area</p>
				<CardContainer data={this.state.data}/>
			</section>
			)
	}
}

export default Sponsor;