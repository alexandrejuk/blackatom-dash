import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewProductAvailable from './New'
import IndividualProductList from './List'

const Available = () => (
  <Switch>
    <Route path="/logged/stock/available/new" component={NewProductAvailable}/>
    <Route path="/logged/stock/available/edit/:id" component={() => <h1>edit available</h1>}/>
    <Route path="/logged/stock/available/list" component={IndividualProductList}/>
  </Switch>
)
 
export default Available