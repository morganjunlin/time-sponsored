import React from 'react'

import Delivery from './Delivery/Delivery'
import Pickup from './Pickup/Pickup'
import Schedule from './Schedule/Schedule'

import './Order.css'

class Order extends React.Component{
	constructor(props){
		super(props)
		this.state={
			route : 'delivery'
		}
		this.route_changer=this.route_changer.bind(this)
		this.view_controller=this.view_controller.bind(this)
	}

	route_changer(route){
		this.setState({route})
	}

	view_controller(route){
		if (route === 'delivery') {
			return <Delivery toggleModal={this.props.toggleModal} route_changer={this.route_changer}/>
		} else if (route === 'pickup') {
			return <Pickup toggleModal={this.props.toggleModal} route_changer={this.route_changer}/>
		} else if (route === 'schedule') {
			return <Schedule toggleModal={this.props.toggleModal} route_changer={this.route_changer}/>
 		}
	}

	render(){
		return(
			<section className="order-modal"> 
				{
					this.view_controller(this.state.route)
				}
			</section>
			)
	}
}

export default Order


			
			// <section className="order-card slide-in-bottom">
			// 	<section id="order-header">
			// 		<button onClick={toggleModal}>close</button>
			// 	</section>
			// 	<section>
			// 		<h1>Your order settings</h1>
			// 	</section>
			// 	<section className="order-put-it-center order-button1" >
			// 		<button>Delivery</button>
			// 		<button>Pickup</button>
			// 	</section>
			// 	<section>
			// 		When would you like to order?
			// 	</section>

			// </section>
