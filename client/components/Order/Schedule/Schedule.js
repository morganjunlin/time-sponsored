import React from 'react'
import './Schedule.css'

class Schedule extends React.Component{
	constructor(props){
		super(props)
		this.state={
			button_selected: "today" // "asap" || "today" || "later"
		}
		this.button_changer=this.button_changer.bind(this)
		this.button_view_controller=this.button_view_controller.bind(this)
	}

	button_changer(button_selected){
		this.setState({button_selected})
	}

	button_view_controller(button_selected){
		if(button_selected === "today") {
			return(
				<section> Today!!!
				</section>
				)
		} else if (button_selected === 'asap') {
			return(
				<section> ASAP!!!
				</section>
				)
		} else if (button_selected === 'later') {
			return(
				<section> Later!!!
				</section>
				)
		}
	}

	render(){
		const { toggleModal , route_changer } = this.props
		return(
		<section className="order-schedule-container">

			<section className="order-schedule-exit">
				<button onClick={()=>route_changer("delivery")}><i class="fas fa-angle-left"></i></button>
				<h3>Schedule my order</h3>
			</section>

			<section className="order-schedule-text">
				<p>Select a pickup time up to 7 days in advance</p>
			</section>

			<section className="order-schedule-buttons">
			{
				this.button_view_controller(this.state.button_selected)
			}
			</section>

			<section className="order-schedule-pickup-button">
				<button onClick={toggleModal}>Pickup at 11:15am</button>
			</section>

		</section>
			)
	}
}


export default Schedule;