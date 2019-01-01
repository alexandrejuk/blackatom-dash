import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Auth from './Auth'
import Logged from './Logged'

const Pages = () => (
  <Switch>
    <Route path="/logged" component={Logged}/>
    <Route path="/auth" component={Auth}/>
    <Redirect to='/logged'/>
  </Switch>
)
export default Pages
