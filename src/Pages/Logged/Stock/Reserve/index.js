import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ReservedList from './List'

const Reserve = () => (
  <Switch>
    <Route path="/logged/stock/reserve/new" component={() => <h1>new reserve</h1>}/>
    <Route path="/logged/stock/reserve/edit/:id" component={() => <h1>edit reserve</h1>}/>
    <Route path="/logged/stock/reserve/list" component={ReservedList}/>
  </Switch>
)
 
export default Reserve