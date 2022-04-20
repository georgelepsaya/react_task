import { React, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_DATA } from "../GraphQL/Queries";
import ProductListingPage from "../pages/ProductListingPage"

const MainWrap = () => {
  const { error, loading, data } = useQuery(GET_DATA);
  let allData = data;
  if (allData) {
    return (
      <>
        <ProductListingPage data={allData} />
      </>
    );
  }
};

export default MainWrap;