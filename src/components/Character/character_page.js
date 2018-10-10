import React from 'react';
import { connect } from 'react-redux';
import { CharacterCard } from './character_card'

class CharactersPage extends React.Component {

	renderCharacters = () => this.props.characters.map(character => <CharacterCard character={character} />)

	render() {
		return (
			<div>
				<h3>Character Page</h3>
				<p>Should list characters and have fucntions to create and delete characters</p>
				{this.renderCharacters()}
			</div>
		)
	}

}

const mapStateToProps = state => {
	debugger
	return { characters: state.authentication.characters }
}

export default connect(mapStateToProps)(CharactersPage)
