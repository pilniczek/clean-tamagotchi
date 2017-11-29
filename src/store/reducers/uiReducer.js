import { combineReducers } from 'redux'
import { types } from '../actions/uiActions'

const toggle = (state = [], action = {}) => {
  switch (action.type) {
    case types.TOGGLE: {
      const position = state.indexOf(action.id)
      if (position !== -1) {
        return state.filter((item) => item !== state[position])
      }
      return [
        ...state,
        action.id,
      ]
    }
    default: {
      return state
    }
  }
}

const tabbed = (state = [], action = {}) => {
  switch (action.type) {
    case types.TABBED: {
      return [action.id]
    }
    default: {
      return state
    }
  }
}

const errorBoundary = (state = [], action = {}) => {
  switch (action.type) {
    case types.ERRORBOUNDARY: {
      return [action.hasError]
    }
    default: {
      return state
    }
  }
}


export default combineReducers({
  toggle,
  tabbed,
  errorBoundary,
})
