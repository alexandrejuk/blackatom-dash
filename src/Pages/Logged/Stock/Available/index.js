import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Available = () => (
  <Switch>
    <Route path="/available/new" component={() => <h1>new available</h1>}/>
    <Route path="/available/edit/:id" component={() => <h1>edit available</h1>}/>
    <Route path="/available/list" component={() => <h1>list available</h1>}/>
  </Switch>
)
 
export default Available