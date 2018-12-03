import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewProductAvailable from './New'
import EditProductAvailable from './Edit'
import IndividualProductList from './List'

const Available = () => (
  <Switch>
    <Route path="/logged/stock/available/new" component={NewProductAvailable}/>
    <Route path="/logged/stock/available/edit/:id" component={EditProductAvailable}/>
    <Route path="/logged/stock/available/list" component={IndividualProductList}/>
  </Switch>
)
 
export default Available