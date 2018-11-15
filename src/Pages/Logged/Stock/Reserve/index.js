import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Reserve = () => (
  <Switch>
    <Route path="/reserve/new" component={() => <h1>new reserve</h1>}/>
    <Route path="/reserve/edit/:id" component={() => <h1>edit reserve</h1>}/>
    <Route path="/reserve/list" component={() => <h1>list reserve</h1>}/>
  </Switch>
)
 
export default Reserve