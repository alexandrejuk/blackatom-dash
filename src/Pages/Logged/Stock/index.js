import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Manager from './Manager'
import Available from './Available'
import Reserve from './Reserve'

const Stock = () => (
  <Switch>
    <Route path="/logged/stock/manager" component={Manager}/>
    <Route path="/logged/stock/available" component={Available}/>
    <Route path="/logged/stock/reserve" component={Reserve}/>
  </Switch>
)
 
export default Stock;