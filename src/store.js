import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'


import createGlobalReducer from './global-reducer'
import globalSagas from './global-sagas'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
]

const store = createStore(
  createGlobalReducer(),
  composeEnhancers(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(globalSagas)

export default store
