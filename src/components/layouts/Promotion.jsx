import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import Image from "../Image";
import P1 from "../../assets/p1.png";
import P2 from "../../assets/p2.png";
import P3 from "../../assets/p3.png";
const Promotion = () => {
  return (
    <div className="pt-[175px] pb-[65px]">
      <Container>
        <Flex className={"justify-between gap-x-6"}>
          <div className="w-1/2">
            <Image imgSrc={P1} />
          </div>
          <div className="w-1/2">
            <Image imgSrc={P2} className={"pb-10"} />
            <Image imgSrc={P3} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Promotion;
