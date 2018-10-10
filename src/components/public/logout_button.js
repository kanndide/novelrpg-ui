import React from 'react'

const button = {
	background: 'darkblue',
	color: 'white',
	borderRadius: '4px',
	boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
}

export const LogoutButton = () =>
	<a href='/login'><button style={button}>Logout</button></a>