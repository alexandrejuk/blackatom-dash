import React from 'react'
import ProductList from './ProductList'


const ReservationEdit  = ({
  reservation,
  loading
}) => <div>
  <ProductList products={reservation.products}/>
</div>

export default ReservationEdit
