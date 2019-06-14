import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import New from './pages/New'

function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/post" component={New} />
    </Switch>
  )
}

export default Routes
