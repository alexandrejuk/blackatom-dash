import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Manager from './Manager'
import Available from './Available'
import Reserve from './Reserve'
import Release from './Release'

const Stock = () => (
  <Switch>
    <Route path="/logged/stock/manager" component={Manager}/>
    <Route path="/logged/stock/available" component={Available}/>
    <Route path="/logged/stock/reserve" component={Reserve}/>
    <Route path="/logged/stock/release" component={Release} />
  </Switch>
)
 
export default Stock;