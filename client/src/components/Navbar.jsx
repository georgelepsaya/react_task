import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../icons/cart_icon.svg";
import brandIcon from "../icons/brand_icon.svg";
import Badge from "@material-ui/core/Badge";
import classes from "./Navbar.module.css";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Currencies from './Currencies';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1F22'
    }
  }
});

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

const CartButton = styled.a`
  display: flex;
  margin-left: 22px;
  cursor: pointer;
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
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 16px;
  height: 100%;
  display: flex;
  width: 97px;
  align-items: center;
  cursor: pointer;
`

export class Navbar extends Component {
  render() {
    const pages = this.props.pages;
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Wrapper>
            <Left>
              {pages.map(page => {
                return (
                  <MenuItem key={page.name}>
                    <NavLink className={classes.navlink} to={`/${page.name}`} style={({ isActive }) => ({
                      color: isActive ? '#5ECE7B' : '#000',
                      fontWeight: isActive ? 600 : 400,
                      borderBottom: isActive ? "2px solid #5ECE7B" : "",
                      transition: "all 100ms",
                    })}>
                      {page.name}
                    </NavLink>
                  </MenuItem>
                )
              })}
            </Left>
            <Center>
              <img src={brandIcon} />
            </Center>
            <Right>
              <Currencies />
              <CartButton href="/cart">
                <Badge badgeContent={3} color="primary" overlap="rectangular">
                  <img src={cartIcon} />
                </Badge>
              </CartButton>
            </Right>
          </Wrapper>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default Navbar