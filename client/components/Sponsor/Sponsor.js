import React from 'react';
import './Sponsor.css';
import CardContainer from './CardContainer/CardContainer';

class Sponsor extends React.Component{

	render(){
		return(
			<section className="sponsor-container">	
				<p id="sponsor-container">Sponsored restaurants in your area</p>
				<CardContainer/>
			</section>
			)
	}
}

export default Sponsor;