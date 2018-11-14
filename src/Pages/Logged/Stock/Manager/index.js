import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Manager = () => (
  <Switch>
    <Route path="/manager/list" component={() => <h1>list manager</h1>}/>
  </Switch>
)
 
export default Manager