import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Manager from './Manager'
import Available from './Available'
import Reserve from './Reserve'
import Release from './Release'
import Total from './Total'

const Stock = () => (
  <Switch>
    <Route path="/logged/stock/manager" component={Manager}/>
    <Route path="/logged/stock/available" component={Available}/>
    <Route path="/logged/stock/reserve" component={Reserve}/>
    <Route path="/logged/stock/release" component={Release} />
    <Route path="/logged/stock/total" component={Total} />
  </Switch>
)
 
export default Stock;