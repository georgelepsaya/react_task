import React, { Component } from 'react'
import styled from 'styled-components';

const CategoryName = styled.h1`
  font-weight: normal;
  text-transform: capitalize;
  margin-bottom: 103px;
  font-size: 42px;
`

const ProductImage = styled.img`
  width: 354px;
  height: 330px;
  object-fit: cover;
`

const ProductContainer = styled.div`
  width: 354px;
  height: 412px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  box-shadow: none;
  transition: 300ms;
  &:hover {
    box-shadow: 0px 4px 35px 8px hsla(210, 5%, 67%, 0.19);
    transition: box-shadow 300ms;
  }
  position: relative;
`

const ProductName = styled.h3`
  font-weight: 300;
  font-size: 18;
`

const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
`

const Circle = styled.div`
  width: 52px;
  height: 52px;
  background-color: #5ECE7B;
  position: absolute;
  top: 318px;
  left: 290px;
  border-radius: 50%;
  display: none;
  transition: 300ms;
  ${ProductContainer}:hover & {
    display: block;
    transition: display 300ms;
  }
`

export class ProductListingPage extends Component {
  render() {
    const products = this.props.data.category.products;
    const filteredProdcuts = products.filter(product => product.category === this.props.category)
    return (
      <>
        <CategoryName>{this.props.category}</CategoryName>
        <Container>
          {filteredProdcuts.map(product => (
            <ProductContainer>
              <Circle />
              <ProductImage src={product.gallery[0]} />
              {/* <h2>{product.name}</h2> */}
              {/* <div
                dangerouslySetInnerHTML={{
                __html: product.description,
              }}
              ></div> */}
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.prices[0].amount}</ProductPrice>
              </ProductInfo>
            </ProductContainer>
          ))}
        </Container>
      </>
    )
  }
}

export default ProductListingPage