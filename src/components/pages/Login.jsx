import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Text from "../Text";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <div className="py-12 border-b-[1px] border-b-gray-200">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"Login"}
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
            text={"Login"}
          />
        </Flex>

        <div className="pt-[130px] pb-20 w-[50%]">
          <Text
            as={"p"}
            className={"text-[16px]  text-[#767676] "}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
          />
        </div>
      </div>
      <div className="pt-[150px] border-b-[1px] border-b-gray-200">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"Returning Customer"}
        />
        <div className="py-12">
          <Flex className={"gap-x-10"}>
            <div className="w-[500px]">
              <Text
                as={"p"}
                text={"E-Mail"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Your E-mail Here"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-[500px]">
              <Text
                as={"p"}
                text={"Password"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="Your Password"
                placeholder="password"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>
        <div className="pt-12 pb-16 ">
          <Button
            bText={"Log In"}
            className={
              "py-4 px-16 text-[14px] font-bold border-2 hover:bg-black hover:text-white "
            }
          />
        </div>
      </div>
      <div className="pt-[150px]">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"New Customer"}
        />
        <div className="py-12 w-[50%]">
          <Text
            as={"p"}
            className={"text-[16px]  text-[#767676] "}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
          />
        </div>
        <div className="pt-12 pb-20 ">
          <Link to="/">
            <Button
              bText={"Continue"}
              className={
                "py-4 px-16 text-[14px] font-bold border-2 hover:bg-black hover:text-white "
              }
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
