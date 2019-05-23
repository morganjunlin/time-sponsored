import React from 'react';
import moment from 'moment';
import './Calendar.css';

class Calendar extends React.Component{
	constructor(props){
		super(props)
		this.state={}
		this.filler=this.filler.bind(this)
	}

	filler(){
		let dayofweek = moment().format('e')
		let emptyArray = new Array(Number(dayofweek)).fill(0)
		return emptyArray.map((item, i)=> <span className="order-schedule-items-later-empty" key={i}></span>)
	}

	render(){
		return(
			<section className="order-schedule-items-later">
				<div className="order-schedule-items-later-month">{moment().format("MMM YYYY")}</div>
				<div className="order-schedule-items-later-days">
					<span>Sun</span>
					<span>Mon</span>
					<span>Tue</span>
					<span>Wed</span>
					<span>Thu</span>
					<span>Fri</span>
					<span>Sat</span>
				</div>
				<div className="order-schedule-items-later-DD">
				{
					this.filler()
				}

				<span id="order-today">{moment().format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(1, 'days').format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(2, 'days').format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(3, 'days').format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(4, 'days').format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(5, 'days').format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(6, 'days').format("DD")}</span>
				<span onClick={this.props.toggleModal}>{moment().add(7, 'days').format("DD")}</span>
				</div>
			</section>
			)


	}
}

export default Calendar;