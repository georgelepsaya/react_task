import { React, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_DATA } from "../GraphQL/Queries";
import ProductListingPage from "../pages/ProductListingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const MainContainer = styled.main`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`

const ProductsContainer = styled.div`
  width: 85%;
`

const MainWrap = () => {
  const { error, loading, data } = useQuery(GET_DATA);
  let allData = data;
  if (allData) {
    return (
      <Router>
        <header>
          <Navbar />
        </header>
        <MainContainer>
          <ProductsContainer>
            <Routes>
              <Route path="/clothes" element={<ProductListingPage data={allData} category={"clothes"} />} />
              <Route path="/tech" element={<ProductListingPage data={allData} category={"tech"} />} />
            </Routes>
          </ProductsContainer>
        </MainContainer>
        <ProductListingPage data={allData} />
      </Router>
    );
  }
};

export default MainWrap;