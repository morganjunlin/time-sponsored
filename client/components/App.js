import React from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Order from './Order/Order';

import axios from 'axios';
import {APIgetRestaurantData} from './api/api';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			isModalOpen : false,
			data: null,
			error : false
		}
		this.getRestaurantData = this.getRestaurantData.bind(this)
		this.toggleModal = this.toggleModal.bind(this)

	}

	componentDidMount(){
		const id = window.location.href.split("id=")[1]
	  	this.getRestaurantData(axios, id)
	}

	getRestaurantData(axios, id){
	  	APIgetRestaurantData(axios, id)
	  	.then(data => this.setState({data}))
	  	.catch(error=>this.setState({error: true}))
	}

	toggleModal(){
		this.setState({isModalOpen: !this.state.isModalOpen})
	}

	render(){
		const {isModalOpen} = this.state
		return(
			<section>
				<section className="order-container">
					<section className="order-status">
						<p>Delivery, ASAP {(this.state.data) && <span>{`(${this.state.data.waitingtime}m)`}</span>}</p>
						<p className="order-no-minimum">No minimum</p>
					</section>
					<button className="order-change" onClick={this.toggleModal}>Change</button> <br />
				</section>
				<section>
					{
						(isModalOpen && this.state.data) &&
						<Modal>
							<Order data={this.state.data} isModalOpen={isModalOpen} toggleModal={this.toggleModal}/>
						</Modal>
					}
				</section>
			</section>
			)
	}
}


export default App;