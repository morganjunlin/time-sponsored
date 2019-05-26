import React from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Order from './Order/Order';

// import Sponsor from './Sponsor/Sponsor';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			url : null,
			isModalOpen : false,
			deliveryTime : ''
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.randomSeed = this.randomSeed.bind(this)
	}

	componentDidMount(){
	  	let url = window.location.href
	  	url = url.split("/")[3]
	  	this.setState({url})

	  	this.randomSeed()
	}

	toggleModal(){
		this.setState({isModalOpen: !this.state.isModalOpen})
	}

	randomSeed(){
		let set = ['(15-25m)', '(25-35m)', '(35-45m)', '(45-55m)','(55-65m)', '(55-65m)']
		let deliveryTime = set[Math.floor((Math.random() * 5) + 0)]
		this.setState({deliveryTime})
	}

	render(){
		const {isModalOpen} = this.state
		return(
			<section>
				<section className="order-container">
					<section className="order-status">
						<p>Delivery, ASAP {this.state.deliveryTime}</p>
						<p className="order-no-minimum">No minimum</p>
					</section>
					<button className="order-change" onClick={this.toggleModal}>Change</button> <br />
				</section>
				<section>
					{
						(isModalOpen) &&
						<Modal>
							<Order isModalOpen={isModalOpen} toggleModal={this.toggleModal}/>
						</Modal>
					}
				</section>
				<section style={{margin: "3rem"}}>
				</section>

				{
				// <section className="app-sponsor-container">
				// 	<Sponsor />
				// </section>
				}

			</section>
			)
	}
}


export default App;