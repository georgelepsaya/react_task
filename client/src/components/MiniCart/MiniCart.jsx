import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@material-ui/core/Badge";
import cartIcon from "../../icons/cart_icon.svg";
import classes from "./MiniCart.module.css";
import ReactDOM from "react-dom";

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
  top: 50px;
  right: -30px;
  z-index: 999;
`

const Backdrop = styled.div`
  position: absolute;
  margin-top: 80px;
  top: 0;
  left: 0;
  width: 100%;
  height: 0px;
  z-index: 20;
  background-color: rgba(57, 55, 72, 0.22);
`

const portalElement = document.getElementById("overlays");

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      scrolled: 0,
    }
  }

  backdropHeight = 0;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.backdropHeight = document.getElementById("main").scrollHeight;
  }

  handleScroll = () => {
    this.setState({ scrolled: document.scrollingElement.scrollTop });
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
    console.dir(this.backdropHeight);
    return (
      <MiniCartContainer>
        <CartButton onClick={() => this.toggleOverlay()}>
          <Badge badgeContent={3} color="primary" overlap="rectangular">
            <img src={cartIcon} />
          </Badge>
        </CartButton>
        {this.state.showModal && 
          <>
          {ReactDOM.createPortal(<Backdrop style={{height: `${this.backdropHeight + 230}px`}}/>, portalElement)}
            <ModalContainer className={this.state.scrolled > 75 ? classes.togglePosition : ""}>

            </ModalContainer>
          </>
        }
      </MiniCartContainer>
    )
  }
}

export default MiniCart