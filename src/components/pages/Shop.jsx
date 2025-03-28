import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Scategory from "../Scategory";
import SproductList from "../SproductList";

const Shop = () => {
  return (
    <>
      <Container>
          <Flex className={"justify-between"}>
            <Scategory/>
            <SproductList/>
          </Flex>
      </Container>
    </>
  );
};

export default Shop;
