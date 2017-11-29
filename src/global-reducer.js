import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import appReducer from './containers/App/reducer'
// import apiDataReducer from './store/reducers/apiDataReducer'
import uiReducer from './store/reducers/uiReducer'

const containersReducer = {
  containers: combineReducers({
    appReducer,
    // NOTE: put other app reducers here
  }),
}

const createGlobalReducer = () => (
  combineReducers({
    ...containersReducer,
    route: routerReducer,
    // api: apiDataReducer,
    ui: uiReducer,
  })
)

export default createGlobalReducer
