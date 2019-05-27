import React from 'react'
import './Schedule.css'
import Calendar from './Calendar/Calendar'

class Schedule extends React.Component{
	constructor(props){
		super(props)
		this.state={
			button_selected: "today" // "asap" || "today" || "later"
		}
		this.button_changer=this.button_changer.bind(this)
		this.button_view_controller=this.button_view_controller.bind(this)
		this.item_view_controller=this.item_view_controller.bind(this)
	}

	button_changer(button_selected){
		this.setState({button_selected})
	}

	button_view_controller(button_selected){

		let styleASAP = (button_selected === 'asap') ? "order-schedule-buttons-selected" : "order-schedule-buttons-not-selected"
		let styleToday = (button_selected === 'today') ? "order-schedule-buttons-selected" : "order-schedule-buttons-not-selected"
		let styleLater = (button_selected === 'later') ? "order-schedule-buttons-selected" : "order-schedule-buttons-not-selected"

		return(
			<section className="order-schedule-buttons">
				<button id="order-schedule-buttons-asap" className={styleASAP} onClick={()=>this.button_changer('asap')}>ASAP</button>
				<button id="order-schedule-buttons-today" className={styleToday} onClick={()=>this.button_changer('today')}>Today</button>
				<button id="order-schedule-buttons-later" className={styleLater} onClick={()=>this.button_changer('later')}>Later</button>
			</section>
			)
	}

	item_view_controller(button_selected){
		if (button_selected === 'asap') {
			return(
				<section className="order-schedule-items-asap">
				{
					(this.props.data) &&
					(
					<div>
						<h5>{this.props.data.name}</h5>
						<h5>eta: {this.props.data.waitingtime} min</h5>
						<p>+20min for orders over $150</p>
					</div>
					)
				}
				</section>
				)
		} else if (button_selected === 'today'){
			return(
				<section className="order-schedule-items-today">
					<select className="order-schedule-items-today-select">
					  <option> 8:00am </option>
					  <option> 9:00am </option>
					  <option> 10:00am </option>
					  <option> 11:00am </option>
					  <option> 12:00am </option>
					  <option> 1:00pm </option>
					  <option> 1:00pm </option>
					  <option> 2:00pm </option>
					  <option> 3:00pm </option>
					  <option> 4:00pm </option>
					  <option> 5:00pm </option>
					  <option> 6:00pm </option>
					  <option> 7:00pm </option>
					  <option> 8:00pm </option>
					  <option> 9:00pm </option>
					  <option> 10:00pm </option>
					</select>
				</section>
				)
		} else if (button_selected === 'later'){
			return <Calendar toggleModal={this.props.toggleModal}/>
		}
	}


	render(){
		const { toggleModal , route_changer } = this.props
		return(
		<section className="order-schedule-container">

			<section className="order-schedule-exit">
				<button id="order-schedule-exit" onClick={()=>route_changer("delivery")}><i className="fas fa-angle-left"></i></button>
				<h3>Schedule my order</h3>
			</section>

			<section className="order-schedule-text">
				<p>Select a pickup time up to 7 days in advance</p>
			</section>

			<div>
			{
				this.button_view_controller(this.state.button_selected)
			}
			</div>

			<section className="order-schedule-items">
			{
				this.item_view_controller(this.state.button_selected)
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