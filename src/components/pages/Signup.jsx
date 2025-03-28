import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Text from "../Text";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <div className="py-12 border-b-[1px] border-b-gray-200">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"Sign up"}
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
            text={"Sign up"}
          />
        </Flex>

        <div className="pt-[130px] pb-20 w-full sm:w-[80%] md:w-[50%]">
          <Text
            as={"p"}
            className={"text-[16px] text-[#767676] "}
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
          text={"Your Personal Details"}
        />
        <div className="py-12">
          <Flex className={"gap-x-10"}>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"First Name"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"Last Name"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>

        <div className="">
          <Flex className={"gap-x-10"}>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"E-Mail Address"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="email"
                placeholder="Your E-mail Here"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-full sm:w-[45%] pb-16">
              <Text
                as={"p"}
                text={"Telephone"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>
      </div>

      <div className="pt-[150px] border-b-[1px] border-b-gray-200">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"New Customer"}
        />
        <div className="py-12">
          <Flex className={"gap-x-10"}>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"Address 1"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"Address 2"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="-"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>

        <div className="">
          <Flex className={"gap-x-10"}>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"City"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Your City"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"Post Code"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="05228"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>

        <div className="py-12">
          <Flex className={"gap-x-10"}>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"Division"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Please Select"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-full sm:w-[45%] pb-14">
              <Text
                as={"p"}
                text={"District"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="text"
                placeholder="Please Select"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>
      </div>

      <div className="pt-[150px] border-b-[1px] border-b-gray-200">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"Your Personal Details"}
        />
        <div className="py-12">
          <Flex className={"gap-x-10"}>
            <div className="w-full sm:w-[45%]">
              <Text
                as={"p"}
                text={"Password"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
            <div className="w-full sm:w-[45%] pb-14">
              <Text
                as={"p"}
                text={"Repeat Password"}
                className={"text-[16px] font-bold text-[#262626] py-3"}
              />
              <input
                type="password"
                placeholder="Repeat Password"
                className="w-full py-3 bg-white focus:ring-0 focus:outline-none border-b-[1px] border-b-gray-200 "
              />
            </div>
          </Flex>
        </div>
      </div>

      <div className="pt-[150px]">
        <div className="py-16 w-full sm:w-[80%] md:w-[50%]">
          <Flex className={"gap-x-3"}>
            <input type="checkbox" className="bg-white" />
            <Text
              as={"p"}
              className={"text-[16px] text-[#767676] "}
              text={"I have read and agree to the Privacy Policy"}
            />
          </Flex>
        </div>

        <div className="py-8">
          <Flex className={"gap-x-5"}>
            <div>
              <Text
                as={"p"}
                className={"text-[16px] text-[#767676] "}
                text={"Subscribe Newsletter"}
              />
            </div>
            <div>
              <Flex className={"gap-x-4"}>
                <div>
                  <Flex className={"gap-x-3"}>
                    <input type="checkbox" className="bg-white" />
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] "}
                      text={"Yes"}
                    />
                  </Flex>
                </div>
                <div>
                  <Flex className={"gap-x-3"}>
                    <input type="checkbox" className="bg-white" />
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] "}
                      text={"No"}
                    />
                  </Flex>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>

        <div className="pt-12 pb-20 ">
          <Link to="/login">
            <Button
              bText={"Log In"}
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

export default Signup;
