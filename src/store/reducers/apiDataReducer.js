import { combineReducers } from 'redux'
import { types } from '../actions/apiActions'

const data = (state = null, action = {}) => {
  switch (action.type) {
    case types.LOAD_SUCCESS:
      return { ...state, [action.id]: action.payload }
    default:
      return state
  }
}

export default combineReducers({
  data,
})
