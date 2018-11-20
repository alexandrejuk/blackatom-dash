import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from './Auth'
import Logged from './Logged'

const Pages = () => (
  <Switch>
    <Route path="/" component={Auth}/>
    <Route path="/logged" component={Logged}/>
  </Switch>
)
export default Pages
