import React from "react";
import Container from '../Container'
import Text from '../Text'
import Flex from '../Flex'
import Product from '../Product'
const Offer = () => {
  return (
    <div className="pt-[65px] pb-[110px]">
      <Container>
        <div>
          <Text
            as={"h1"}
            className={"text-[40px] text-[#262626] font-bold pb-20"}
            text={"Special Offers"}
          />
        </div>
        <div className="">
          <Flex className={"justify-between"}>
            <Product />
            <Product />
            <Product />
            <Product />
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
