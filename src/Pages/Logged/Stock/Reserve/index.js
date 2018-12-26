import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewReserve from './new'
import ReservedList from './List'
import ReservedEdit from './Edit'

const Reserve = () => (
  <Switch>
    <Route path="/logged/stock/reserve/edit/:id" component={ReservedEdit}/>
    <Route path="/logged/stock/reserve/new" component={NewReserve}/>
    <Route path="/logged/stock/reserve/list" component={ReservedList}/>
  </Switch>
)
 
export default Reserve