import React from 'react'

const button = {
	background: 'red',
	color: 'white',
	borderRadius: '4px',
	boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
}


export const DeleteButton = ({props}) => 
	<button onClick={props} style={button}>Delete</button>