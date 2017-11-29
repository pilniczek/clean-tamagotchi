import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Raven from 'raven-js'
import { sentryUrl } from './config'

import store from './store'
import routes from './routes'

Raven.config(sentryUrl).install()

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
)
