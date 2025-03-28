import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Text from "../Text";
import Button from "../Button";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const MyAcoount = () => {
  return (
    <Container>
      <div className="py-12">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"My Account"}
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
            className={"text-[12px] text-[#767676] "}
            text={"My Account"}
          />
        </Flex>
      </div>
      <div className="w-[80%] py-[150px]">
        <Flex className={"gap-x-16"}>
          <div className="w-[30%]">
            <Text
              as={"p"}
              className={
                "text-[16px] text-[#767676] py-8 border-b-2 border-b-gray-200 hover:font-bold hover:text-[#262626] hover:pl-2"
              }
              text={"Dashboard"}
            />
            <Text
              as={"p"}
              className={
                "text-[16px] text-[#767676] py-8 border-b-2 border-b-gray-200 hover:font-bold hover:text-[#262626] hover:pl-2"
              }
              text={"Others"}
            />
            <Text
              as={"p"}
              className={
                "text-[16px] text-[#767676] py-8 border-b-2 border-b-gray-200 hover:font-bold hover:text-[#262626] hover:pl-2"
              }
              text={"Downloads"}
            />
            <Text
              as={"p"}
              className={
                "text-[16px] text-[#767676] py-8 border-b-2 border-b-gray-200 hover:font-bold hover:text-[#262626] hover:pl-2"
              }
              text={"Addresses"}
            />
            <Text
              as={"p"}
              className={
                "text-[16px] text-[#767676] py-8 border-b-2 border-b-gray-200 hover:font-bold hover:text-[#262626] hover:pl-2"
              }
              text={"Account Details"}
            />
            <Text
              as={"p"}
              className={
                "text-[16px] text-[#767676] py-8 border-b-2 border-b-gray-200 hover:font-bold hover:text-[#262626] hover:pl-2"
              }
              text={"Log Out"}
            />
          </div>
          <div>
            <Text
              as={"p"}
              className={"text-[16px] text-[#767676] py-8 "}
              text={" Hello admin (not admin? Log out)"}
            />
            <Text
              as={"p"}
              className={"text-[16px] text-[#767676] py-8 "}
              text={
                " From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
              }
            />
          </div>
        </Flex>
        <div className="py-20">
          <Link to="/">
            <Button
              bText={"Return Home"}
              className={
                "py-4 px-16 text-[14px] font-bold border-2 hover:bg-black hover:text-white"
              }
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MyAcoount;
