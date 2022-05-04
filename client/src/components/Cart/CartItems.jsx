import React, { Component } from 'react';
import CartItem from './CartItem';
import styled from 'styled-components';

class CartItems extends Component {
  render() {
    const product1 = this.props.data.categories[0].products[3];
    const product2 = this.props.data.categories[0].products[4];
    return (
      <>
        <CartItem product={product1} />
        <CartItem product={product2} />
      </>
    )
  }
}

export default CartItems;