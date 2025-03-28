import React from "react";
import Text from "../Text";
import Flex from "../Flex";
import Container from "../Container";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Jhuri from "../../assets/jhuri.png";
import Watch from "../../assets/watch.png";
import Image from "../Image";
import Button from "../Button";
const About = () => {
  return (
    <>
      <Container>
        <div>
          <div className="py-12 w-[30%]">
            <Text
              as={"h1"}
              className={"text-[50px] font-bold text-[#262626]"}
              text={"About"}
            />
            <Flex className={"gap-2 py-4"}>
              <Text
                as={"p"}
                className={"text-[12px] text-[#767676]"}
                text={"Home"}
              />
              <MdOutlineKeyboardArrowRight />
              <Text
                as={"p"}
                className={"text-[12px]  text-[#767676] "}
                text={"About"}
              />
            </Flex>
          </div>
        </div>
        <Flex className={"justify-between py-[125px]"}>
          <div className="relative">
            <Image imgSrc={Watch} className={"h-[636px] w-[640px]"} />
            <Button
              bText={"Our Brands"}
              className={
                "text-[16px] font-bold px-28 py-8 bg-black text-white absolute bottom-[25px] left-[170px]"
              }
            />
          </div>
          <div className="relative">
            <Image imgSrc={Jhuri} className={"h-[636px] w-[640px]"} />
            <Button
              bText={"Our Brands"}
              className={
                "text-[16px] font-bold px-28 py-8 bg-black text-white absolute bottom-[25px] left-[170px]"
              }
            />
          </div>
        </Flex>
        <div className="py-20">
          <Text
            as={"p"}
            text={
              "Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
            }
            className={"text-[39px] text-center"}
          />
        </div>
        <div className="py-36">
          <Flex className={'justify-between'}>
            <div className="w-[30%]">
            <Text
            as={"h4"}
            text={'Our Vision'}
            className={"text-[25px] text-[#262626] font-bold"}
          />
          <Text
            as={"p"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.."
            }
            className={"text-[16px] text-[#767676] py-7"}
          />
            </div>
            <div className="w-[30%]">
            <Text
            as={"h4"}
            text={'Our Story'}
            className={"text-[25px] text-[#262626] font-bold"}
          />
          <Text
            as={"p"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            }
            className={"text-[16px] text-[#767676] py-7"}
          />
            </div>
            <div className="w-[30%]">
            <Text
            as={"h4"}
            text={'Our Brands'}
            className={"text-[25px] text-[#262626] font-bold"}
          />
          <Text
            as={"p"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            className={"text-[16px] text-[#767676] py-7"}
          />
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default About;
