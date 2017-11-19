import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './store'

import App from './containers/App'
import Bitz from './containers/Bitz'
import Box from './containers/Box'
import NoMatch from './containers/NoMatch'

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/bitz" component={Bitz} />
      <Route exact path="/box" component={Box} />
      <Route component={NoMatch} />
      {/* NOTE: put other app routes here */}
    </Switch>
  </ConnectedRouter>
);
export default routes
