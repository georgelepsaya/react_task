import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import AttributeSet from '../components/AttributeSet';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

const GalleryImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  object-fit: cover;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ViewImage = styled.img`
  max-height: 511px;
  max-width: 610px;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: 118px;
`

const ProductName = styled.h2`
  font-weight: 600;
  font-size: 30px;
`

const ProductDescription = styled.div`
  margin-top: 20px;
  &, * {
    font-family: 'Roboto', sans-serif;
  }
`

const PriceTag = styled.h3`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 700;
  font-size: 18px;
  margin-top: 43px;
`

const AddButton = styled.button`
  width: 292px;
  background: rgba(94, 206, 123, 1);
  border: none;
  padding: 16px 32px;
  color: #fff;
  font-family: 'Raleway';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
`

class ProductDescriptionPage extends Component {
  product = this.props.data.find(p => p.id === this.props.params.id);

  render() {
    console.log(this.product)
    return (
      <Container>
        <ImagesContainer>
          <GalleryContainer>
            {this.product.gallery.map(pic => {
              return <GalleryImage src={pic} />
            })}
          </GalleryContainer>
          <ViewImage src={this.product.gallery[0]} />
        </ImagesContainer>
        <ProductInfo>
          <ProductName>{this.product.name}</ProductName>
          {this.product.attributes.map(attr => {
            return <AttributeSet attr={attr} />
          })}
          <PriceTag>PRICE:</PriceTag>
          <AddButton>ADD TO CART</AddButton>
          <ProductDescription
            dangerouslySetInnerHTML={{
            __html: this.product.description,
            }}
          ></ProductDescription>
        </ProductInfo>
      </Container>
    )
  }
}

export default withParams(ProductDescriptionPage);