import React from 'react';

export const CharacterCard = (props) =>
	<div>
		<h3>{props.character.name}</h3>
		<p>Chapter: {props.character.chapter}</p>
		<p>Scene: {props.character.scene}</p>
		<p>Gold: {props.character.gold}</p>
	</div>