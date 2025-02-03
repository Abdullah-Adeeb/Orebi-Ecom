import React from "react";
import Container from "../Container";
import Image from "../Image";
import Menu from "../Menu";
import Flex from "../Flex";
import Logo from "./../../assets/Logo (1).png";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaSortDown, FaShoppingCart } from "react-icons/fa";
import Text from "../Text";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div>
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[30%] py-8">
             <Link>
             <Image imgSrc={Logo} />
             </Link>
            </div>
            <div className="w-[40%] pl-20">
              <Menu className={"py-8 me-auto"}>
                <Link to={"/"}>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    Shop
                  </li>
                </Link>

                <Link>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    About
                  </li>
                </Link>
                <Link>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    Contacts
                  </li>
                </Link>
                <Link>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    Journal
                  </li>
                </Link>
              </Menu>
            </div>
            <div className="w-[30%]"></div>
          </Flex>
        </Container>
        <div className="bg-[#F5F5F3] py-6">
          <Container>
            <Flex className={"justify-between items-center"}>
              <div className="w-[30%] ">
                <Flex className={"items-center"}>
                  <HiOutlineBars3CenterLeft />
                  <Text
                    as={"p"}
                    className={"text-[14px] text-[#262626] px-3 "}
                    text={"Sort By Category"}
                  />
                </Flex>
              </div>
              <div className="w-[40%] relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className=" w-full p-4 bg-white rounded-md"
                />
                <FaSearch className={"absolute top-5 right-5"} />
              </div>
              <div className="w-[30%] right-2 ">
                <Flex className={"justify-end gap-5"}>
                  <div className="flex gap-x-2">
                    <FaUser />
                    <FaSortDown />
                  </div>
                  <div>
                    <FaShoppingCart />
                  </div>
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
