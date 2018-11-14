import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Manager from './Manager'

const Stock = () => (
  <Switch>
    <Route path="/stock/manager" component={Manager}/>
    <Route path="/stock/available" component={() => <h1>Hello world</h1>}/>
    <Route path="/stock/reserve" component={() => <h1>Hello world</h1>}/>
    <Route path="/stock/release" component={() => <h1>Release Stock</h1>}/>
  </Switch>
)
 
export default Stock;