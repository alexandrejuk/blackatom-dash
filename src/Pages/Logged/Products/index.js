import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NewProduct from './New'
import EditProduct from './Edit'
import ListProducts from './List'

const Products = () => (
  <Switch>
    <Route path="/logged/products/new" component={NewProduct}/>
    <Route path="/logged/products/edit/:id" component={EditProduct}/>
    <Route path="/logged/products/list" component={ListProducts}/>
  </Switch>
)
 
export default Products;