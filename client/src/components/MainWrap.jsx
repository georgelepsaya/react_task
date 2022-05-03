import { React } from "react";
import ProductListingPage from "../pages/ProductListingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";

const MainContainer = styled.main`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`

const ProductsContainer = styled.div`
  width: 85%;
`

const MainWrap = (props) => {
  const allData = props.data;
  if (allData) {
    console.log(allData)
    return (
      <Router>
        <header>
          <Navbar pages={allData.categories} />
        </header>
        <MainContainer>
          <ProductsContainer>
            <Routes>
              {allData.categories.map(category => {
                return <Route path={`${category.name}`} element={<ProductListingPage data={category.products} category={`${category.name}`} />} />
              })}
              <Route path="/product/:id" element={<ProductDescriptionPage data={allData.categories[0].products} />} />
            </Routes>
          </ProductsContainer>
        </MainContainer>
      </Router>
    );
  }
};

export default MainWrap;