import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} />
      <p>0</p>
    </>
  )
}

export default CartWidget
