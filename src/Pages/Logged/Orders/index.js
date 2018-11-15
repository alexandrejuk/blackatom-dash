import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NewOrder from './New'
import OrderList from './List'
import OrderDetail from './detail'

const Orders = () => (
  <Switch>
    <Route path="/orders/new" component={NewOrder}/>
    <Route path="/orders/list" component={OrderList}/>
    <Route path="/orders/detail/:id" component={OrderDetail}/>
  </Switch>
)
 
export default Orders;