import React, { Component } from 'react';
import vectorIcon from "../icons/vector.svg";
import styled from "styled-components";

const CurrenciesContainer = styled.div`
  position: relative;
`

const Currency = styled.span`
  font-size: 18;
  cursor: pointer;
`

class Currencies extends Component {
  render() {
    return (
      <CurrenciesContainer>
        <Currency>
          $<img src={vectorIcon} style={{marginLeft: "7px"}} />
        </Currency>
      </CurrenciesContainer>
    )
  }
}

export default Currencies