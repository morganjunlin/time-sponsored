import React from 'react';
import './MenuPageNav.css';


class MenuPageNav extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}

	render(){
		return(
			<section className="menuPageNav-container" id="menuPageNav-content">
				<div className="menuPageNav-content">
					<a id="menuPageNav-menu" className="menuPageNav-menu">Menu</a>
					<a id="menuPageNav-about" className="menuPageNav-about">About</a>
					<a id="menuPageNav-reviews" className="menuPageNav-reviews">Reviews</a>
				</div>
			</section>
			)
	}
}

export default MenuPageNav;