import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@material-ui/core/Badge";
import cartIcon from "../../icons/cart_icon.svg";

const CartButton = styled.a`
  display: flex;
  margin-left: 22px;
  cursor: pointer;
`

const MiniCartContainer = styled.div`
  position: relative;
`

const ModalContainer = styled.div`
  position: absolute;
  width: 325px;
  height: 677px;
  background-color: #fff;
  border: 1px solid black;
  top: 50px;
  left: -250px;
  z-index: 999;
`

const Overlay = styled.div`
  position: absolute;
  left: 0px;
  top: 80px;
  background: rgba(57, 55, 72, 0.22);
`

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  toggleOverlay = () => {
    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal,
      }
    })
  }

  render() {
    const products = this.props.data;
    return (
      <MiniCartContainer>
        <CartButton onClick={() => this.toggleOverlay()}>
          <Badge badgeContent={3} color="primary" overlap="rectangular">
            <img src={cartIcon} />
          </Badge>
        </CartButton>
        {this.state.showModal && 
          <>
            <Overlay />
            <ModalContainer>
              Cart
            </ModalContainer>
          </>
        }
      </MiniCartContainer>
    )
  }
}

export default MiniCart