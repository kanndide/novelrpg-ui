import React from 'react';

class CharacterCard extends React.Component {

	state = {
		counter: 0
	}

	handleClick = () => {
		let counter = this.state.counter
		this.setState({
			counter: counter + 1
		})	
	}

	render() {
		return(
			<div>
				<h3>{this.props.character.name}</h3>
				<p>Chapter: {this.props.character.chapter}</p>
				<p>Scene: {this.props.character.scene}</p>
				<p>Gold: {this.props.character.gold}</p>
				<button onClick={this.handleClick}>{this.state.counter}</button>
			</div>
		)
	}
}

export default CharacterCard