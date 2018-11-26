import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Manager from './Manager'
import Available from './Available'

const Stock = () => (
  <Switch>
    <Route path="/logged/stock/manager" component={Manager}/>
    <Route path="/logged/stock/available" component={Available}/>
    <Route path="/logged/stock/reserve" component={() => <h1>Hello world</h1>}/>
    <Route path="/logged/stock/release" component={() => <h1>Release Stock</h1>}/>
  </Switch>
)
 
export default Stock;