import React from 'react'
import './Delivery.css'

const Delivery = ({toggleModal,route_changer, data}) => {
	return(
		<section className="order-delivery-container">

			<section className="order-delivery-exit">
				<button onClick={toggleModal}>X</button>
				<h3>Your order settings</h3>
			</section>

			<section className="order-delivery-pickup-buttons">
				<button>Delivery</button>
				<button onClick={()=>route_changer("pickup")}>Pickup</button>
			</section>

			<section className="order-delivery-whenwouldyou">
				<h5>When would you like your order?</h5>
				<button onClick={()=>route_changer("schedule")}>ASAP {(data) && <span>{`(${data.waitingtime}m)`}</span>}</button>
			</section>

			<section className="order-delivery-address">
				<h5>Delivery address</h5>
				<div className="order-delivery-input-container">
					<i className="fas fa-map-marker-alt"></i>
					<input className="order-delivery-input-field" placeholder="Street address, city, state"/>
				</div>
			</section>

			<section className="order-delivery-update">
				<button onClick={toggleModal}>Update</button>
			</section>

		</section>
		)
}

export default Delivery;