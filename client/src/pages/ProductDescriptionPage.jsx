import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

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
`

const ProductName = styled.h2`
  font-weight: 600;
  font-size: 30px;
`

class ProductDescriptionPage extends Component {
  product = this.props.data.find(p => p.id === this.props.params.id);

  render() {
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
          <h2>{this.product.name}</h2>
          <div
            dangerouslySetInnerHTML={{
            __html: this.product.description,
            }}
          ></div>
        </ProductInfo>
      </Container>
    )
  }
}

export default withParams(ProductDescriptionPage);