import React from 'react';
import { connect } from 'react-redux';

class CreateCharacterPage extends React.Component {
	state = {
		name: '',
		hp: 100,
		gold: 50,
		chapter: 0,
		scene: 0,
		user_id: '',
		stats: {
			swordsman: 0,
			rogue:, 0,
			charmer: 0,
			athlete: 0,
			survivor: 0,

		}
	}

	this.handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			stats: {
				...this.state.stats,
				[name]:value,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault()
	}

	render() {
		return(
			<div className="col-sm-8">
				<form onSubmit={this.handleSubmit}>
				</form>
			</div>
		)
	}

}