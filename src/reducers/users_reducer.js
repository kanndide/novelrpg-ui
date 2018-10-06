export default function usersReducer(state = {
	loading: false,
	user: {},
}, action) {
	switch (action.type) {
		case 'LOADING_USER':
			return {loading: true}
		case 'LOGIN_USER':
			return {loading: false, user: action.payload}
		case 'LOGOUT_USER':
			return {...state, user: {}}
		default:
			return state;
	}
}