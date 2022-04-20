import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class ProductListingPage extends Component {
  render() {
    const products = this.props.data.category.products;
    return (
      <>
        <Navbar />
        {products.map(product => (
          <div style={{marginTop: "30px"}}>
            <img src={product.gallery[0]} style={{width: "500px"}} />
            <div
              dangerouslySetInnerHTML={{
              __html: product.description,
            }}
            ></div>
          </div>
        ))}
      </>
    )
  }
}

export default ProductListingPage