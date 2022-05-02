import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../icons/cart_icon.svg"
import vectorIcon from "../icons/vector.svg"
import brandIcon from "../icons/brand_icon.svg"
import Badge from "@material-ui/core/Badge";

const Container = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 0px 101px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

const Currency = styled.span`
  font-size: 18;
  cursor: pointer;
`

const CartButton = styled.div`
  display: flex;
  margin-left: 22px;
`

const Left = styled.div`
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  cursor: pointer;
`

export class Navbar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
            <MenuItem
              // style={{ borderBottomWidth: "2px", borderBottomColor: "#5ECE7B", borderBottomStyle: "solid", borderTopWidth: "2px", borderTopColor: "#FFF", borderTopStyle: "solid" }}
            >
              <NavLink to={"/clothes"} style={({ isActive }) => ({
              color: isActive ? '#5ECE7B' : '#000',
              })}>
                CLOTHES
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to={"/tech"} style={({ isActive }) => ({
              color: isActive ? '#5ECE7B' : '#000',
              })}>
                TECH
              </NavLink>
            </MenuItem>
          </Left>
          <Center>
            <img src={brandIcon} />
          </Center>
          <Right>
            <Currency>
              $
              <img src={vectorIcon} style={{marginLeft: "7px"}} />
            </Currency>
            <CartButton>
              <Badge badgeContent={1} color="primary" overlap="rectangular">
                <img src={cartIcon} />
              </Badge>
            </CartButton>
          </Right>
        </Wrapper>
      </Container>
    )
  }
}

export default Navbar