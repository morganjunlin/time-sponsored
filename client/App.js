import React from 'react';
import axios from 'axios';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data : null,
			counter: 0
		}
		this.increment=this.increment.bind(this)
	}

	// {
	//   "userId": 1,
	//   "id": 1,
	//   "title": "delectus aut autem",
	//   "completed": false
	// }

	componentDidMount(){
		axios('https://jsonplaceholder.typicode.com/todos/1')
		.then(({data}) => this.setState({data}))
		.catch(e=> console.log(e))
	}

	increment(){
		let curr = this.state.counter
		this.setState({counter: curr+1})
	}

	render(){
		// console.log(this.state.counter)
		return(
			<section>
				<h1>Hello</h1>
				<button id="counter_button" onClick={this.increment}>Click</button>
			{
				(this.state.data) &&
				(
					<div>
					id : {this.state.data.userId}
					</div>
				)
			}
			</section>
			)
	}
}

export default App;