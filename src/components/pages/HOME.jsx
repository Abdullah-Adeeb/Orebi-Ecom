import React from "react";
import Container from "../Container";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import Guarantee from "../layouts/Guarantee";
import Promotion from "../layouts/Promotion";
import ProductsPart from "../layouts/ProductsPart";
import Phone from "../layouts/Phone";
import Offer from "../layouts/Offer";
import Footer from "../layouts/Footer";
const HOME = () => {
  return (
    <>

      <Banner />
      <Guarantee />
      <Promotion />
      <ProductsPart />
      <Phone />
      <Offer />
     
    </>
  );
};

export default HOME;
