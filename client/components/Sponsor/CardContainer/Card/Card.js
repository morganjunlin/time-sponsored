import React from 'react';
import './Card.css';

class Card extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}

	render(){
		const {item} = this.props
		return(
			<section className="sponser-card">
			{
				(item) &&
				(
					<div>
					<img alt="food" src={item.image} />
					<div className="sponser-card-content">
						<p id="sponser-card-content-name">{item.name}</p>
						<p id="sponser-card-content-category">{item.category}</p>
						<div id="sponser-card-subcontent">
							<div>
								<p id="sponser-card-content-waiting">{item.waiting}</p>
								<p id="sponser-card-content-extra">{item.extra}</p>
							</div>
							<div>
								<p id="sponser-card-content-waiting">{item.rate}</p>
								<p id="sponser-card-content-extra">{item.count} ratings</p>
							</div>
						</div>

					</div>
					</div>
				)
			}
			</section>
			)
	}
}

export default Card;