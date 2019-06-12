import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Post from './pages/Post'

function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/post" component={Post} />
    </Switch>
  )
}

export default Routes
