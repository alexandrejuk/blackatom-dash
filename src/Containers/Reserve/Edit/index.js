import React from 'react'
import ProductList from './ProductList'
import IndividualProductList from './IndividualProductList'


const ReservationEdit  = ({
  reservation,
  loading
}) => <div>
  <ProductList products={reservation.products}/>
  <IndividualProductList products={reservation.individualProducts}/>
</div>

export default ReservationEdit
