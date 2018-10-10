import { userConstants } from '../_constants/user_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      let user = JSON.parse(localStorage.getItem('user'))
      return { ...state, user };
    case userConstants.DELETE_SUCCESS:
      debugger
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      return { error: action.error};

    case userConstants.GET_USER_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_USER_SUCCESS:
      return { ...state, user: action.user };
    case userConstants.GET_USER_FAILURE:
      return { 
        error: action.error
      };

    default:
      return state
  }
}