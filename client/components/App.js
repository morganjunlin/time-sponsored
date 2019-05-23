import React from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Order from './Order/Order';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			url : null,
			isModalOpen : false
		}
		this.toggleModal = this.toggleModal.bind(this)
	}

	componentDidMount(){
	  	let url = window.location.href
	  	url = url.split("/")[3]
	  	this.setState({url})
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
						<p>Delivery, ASAP (35-45m)</p>
						<p className="order-no-minimum">No minimum</p>
					</section>
					<button className="order-change" onClick={this.toggleModal}>Change</button> <br />

					{
						(isModalOpen) &&
						<Modal>
							<Order isModalOpen={isModalOpen} toggleModal={this.toggleModal}/>
						</Modal>
					}

				</section>
			</section>
			)
	}
}


export default App;