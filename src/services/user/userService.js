export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return (dispatch) => {
    	dispatch({ type: 'LOADING_USER' });
    	return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                dispatch({type: 'LOGIN_USER', payload: user})
            }
        });
}

function logout() {
    return disptach({ type: 'LOGOUT_USER' });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/signup`, requestOptions)
    .then(handleResponse)
    .then(user => {
    	if (user.token) {
            dispatch({type: 'LOGIN_USER', payload: user})
        }
    })
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}