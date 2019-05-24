import React from 'react';
import Card from './Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ data }) => {
	return(
		<section className="sponsor-card-container">
			{
				(data) &&
				data.map((item,i)=> <Card key={i} item={item} />)
			}
		</section>
		)
}

export default CardContainer;