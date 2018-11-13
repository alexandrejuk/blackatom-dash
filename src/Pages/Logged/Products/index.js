import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NewProduct from './New'
import EditProduct from './Edit'
import ListProducts from './List'

const Products = () => (
  <Switch>
    <Route path="/products/new" component={NewProduct}/>
    <Route path="/products/edit/:id" component={EditProduct}/>
    <Route path="/products/list" component={ListProducts}/>
  </Switch>
)
 
export default Products;