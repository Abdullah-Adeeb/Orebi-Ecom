import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Text from "../Text";
import Image from "../Image";
import Logo from "../../assets/Logo (1).png";
FaLinkedinIn;
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-16 bg-[#F5F5F3]">
      <Container>
        <Flex>
          <div className="w-[20%]">
            <Text
              as={"h4"}
              className={"text-[16px] text-[#262626] font-bold py-7"}
              text={"Menu"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Home"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Shop"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"About"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Contact"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Journal"}
            />
          </div>
          <div className="w-[20%]">
            <Text
              as={"h4"}
              className={"text-[16px] text-[#262626] font-bold py-7"}
              text={"Shop"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Category 1"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Category 2"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Category 3"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Category 4"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Category 5"}
            />
          </div>
          <div className="w-[20%]">
            <Text
              as={"h4"}
              className={"text-[16px] text-[#262626] font-bold py-7"}
              text={"Help"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Privacy Policy"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Terms & Conditions"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Special E-shop"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Shipping"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"Secure Payments"}
            />
          </div>
          <div className="w-[20%]">
            <Text
              as={"h4"}
              className={"text-[16px] text-[#262626] font-bold py-5"}
              text={"(052) 611-5711"}
            />
            <Text
              as={"h4"}
              className={"text-[16px] text-[#262626] font-bold pb-3"}
              text={"company@domain.com"}
            />
            <Text
              as={"p"}
              className={"text-[14px] text-[#6D6D6D] pb-3"}
              text={"575 Crescent Ave. Quakertown, PA 18951"}
            />
          </div>
          <div className="w-20%">
            <Image imgSrc={Logo} />
          </div>
        </Flex>

        <div className="pt-20">
          <Flex className={"justify-between"}>
            <div>
              <Flex className={"gap-x-5"}>
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
              </Flex>
            </div>
            <div>
              <Text
                as={"p"}
                className={"text-[14px] text-[#6D6D6D] pb-3"}
                text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"}
              />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
