import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NewOrder from './New'
import OrderList from './List'
import OrderDetail from './detail'

const Orders = () => (
  <Switch>
    <Route path="/logged/orders/new" component={NewOrder}/>
    <Route path="/logged/orders/list" component={OrderList}/>
    <Route path="/logged/orders/detail/:id" component={OrderDetail}/>
  </Switch>
)
 
export default Orders;