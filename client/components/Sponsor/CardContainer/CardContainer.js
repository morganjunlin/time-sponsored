import React from 'react';
import Card from './Card/Card.js';
import './CardContainer.css';
import axios from 'axios';

class CardContainer extends React.Component{
	constructor(props){
		super(props)
		this.state={
			group1: [],
			group2: [],
			group3: [],
			group4: [],
			current: 'group1'
		}
		this.getSponsoredData=this.getSponsoredData.bind(this)
		this.splitData=this.splitData.bind(this)
		this.changeDataSet=this.changeDataSet.bind(this)
	}

	componentDidMount(){
		this.getSponsoredData()
	}

	getSponsoredData(){
		const id = window.location.href.split("id=")[1]
	  	axios.get(`http://localhost:3000/api/sponsored/${id}`)
	  	.then(({data}) => this.splitData(data))
	  	.catch(e=>console.log(e))
	}

	splitData(data){
		if (data !== null) {
			let group1 = data.slice(0,3)
			let group2 = data.slice(3,6)
			let group3 = data.slice(6,9)
			let group4 = data.slice(9,12)
			this.setState({group1, group2, group3, group4})
		}
	}

	changeDataSet(input){
		let current = this.state.current
		let counter = Number(current[5])
		if (input === 'prev') {
			if(current !== 'group1') {
				counter -= 1
				let newCurr = `group${counter}`
				this.setState({current:newCurr})
			}
		} else if (input === 'next') {
			if(current !== 'group4') {
				counter += 1
				let newCurr = `group${counter}`
				this.setState({current:newCurr})
			}
		}
	}

	render(){
		let slicedData = (this.state.current === 'group1') 
		? this.state.group1 
		: (this.state.current === 'group2')
		? this.state.group2
		: (this.state.current === 'group3')
		? this.state.group3
		: this.state.group4

		let leftButtonStyle = (this.state.current === 'group1') ? "sponsor-card-left sponsor-btn-invisible" : "sponsor-card-left"
		let rightButtonStyle = (this.state.current === 'group4') ? "sponsor-card-right sponsor-btn-invisible" : "sponsor-card-right"

		return(
			<section className="sponsor-card-container">

				<div className={leftButtonStyle}>
					<button onClick={()=>this.changeDataSet("prev")}><i className="fas fa-angle-left"></i></button>
				</div>

				<div className="sponsor-card-container-sub">
					{
						(slicedData) &&
						slicedData.map((item,i)=> <Card key={i} item={item} />)
					}
				</div>

				<div className={rightButtonStyle}>
					<button onClick={()=>this.changeDataSet("next")}><i className="fas fa-angle-right"></i></button>
				</div>

			</section>
			)
	}
}

export default CardContainer;