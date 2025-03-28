import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  const [bizli, setBizli] = useState(false);
  const [user, setUser] = useState(false);
  
  const toggleShow = () => {
    setShow(!show);
  };

  const toggleBizli = () => {
    setBizli(!bizli);
  };
  const toggleUser = () => {
    setUser(!user);
  };
  return (
    <>
      <div>
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[30%] py-8">
              <Link to={"/"}>
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

                <Link to={"/about"}>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    About
                  </li>
                </Link>
                <Link to={"/contacts"}>
                  <li className="px-4 text-[14px] text-[#767676] hover:text-[#262626] hover:text-[16px] hover:font-bold">
                    Contacts
                  </li>
                </Link>
              </Menu>
            </div>
            <div className="w-[30%]"></div>
          </Flex>
        </Container>
        <div className="bg-[#F5F5F3] py-6 relative">
          <Container>
            <Flex className={"justify-between items-center"}>
              <div className="w-[30%]">
                <Flex className={"items-center"}>
                  <HiOutlineBars3CenterLeft onClick={toggleShow} />
                  <Text
                    as={"p"}
                    className={"text-[14px] text-[#262626] px-3 "}
                    text={"Sort By Category"}
                  />
                </Flex>
                {show && (
                  <div className="absolute top-[90px] left-[250px] z-50 bg-black p-4 w-[260px]">
                    <ul>
                      <li className="text-[14px] text-[#767676] py-3 hover:font-bold hover:pl-2 hover:text-white hover:duration-300">
                        Accesories
                      </li>
                      <li className="text-[14px] text-[#767676] py-3 hover:font-bold hover:pl-2 hover:text-white hover:duration-300">
                        Furniture
                      </li>
                      <li
                        className="text-[14px] text-[#767676] py-3 hover:font-bold hover:pl-2 hover:text-white hover:duration-300"
                        onClick={toggleBizli}
                      >
                        Electronics (Click)
                      </li>
                      <li className="text-[14px] text-[#767676] py-3 hover:font-bold hover:pl-2 hover:text-white hover:duration-300">
                        Clothes
                      </li>
                      <li className="text-[14px] text-[#767676] py-3 hover:font-bold hover:pl-2 hover:text-white hover:duration-300">
                        Bags
                      </li>
                      <li className="text-[14px] text-[#767676] py-3 hover:font-bold hover:pl-2 hover:text-white hover:duration-300">
                        Home Appliances
                      </li>
                    </ul>
                  </div>
                )}
                {bizli && (
                  <div className="w-[545px] p-8 shadow-xl bg-gray-50 absolute top-[70px] left-[520px] z-50">
                    <Flex className={"justify-between"}>
                      <div>
                        <Text
                          as={"h5"}
                          className={
                            "text-[16px] text-[#262626] pb-2 font-bold"
                          }
                          text={"Phones"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Phone 1"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Phone 2"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Phone 3"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Phone 4"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Phone 5"}
                        />
                      </div>
                      <div>
                        <Text
                          as={"h5"}
                          className={
                            "text-[16px] text-[#262626] pb-2 font-bold"
                          }
                          text={"Computers"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 1"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 2"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 3"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 4"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 5"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 6"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Computer 7"}
                        />
                      </div>
                      <div>
                        <Text
                          as={"h5"}
                          className={
                            "text-[16px] text-[#262626] pb-2 font-bold"
                          }
                          text={"Smart Watches"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 1"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 2"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 3"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 4"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 5"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 6"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Smart Watch 7"}
                        />
                      </div>
                      <div>
                        <Text
                          as={"h5"}
                          className={
                            "text-[16px] text-[#262626] pb-2 font-bold"
                          }
                          text={"Cameras"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 1"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 2"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 3"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 4"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 5"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 6"}
                        />
                        <Text
                          as={"p"}
                          className={
                            "text-[14px] text-[#767676] py-2 hover:text-[#262626] hover:font-bold"
                          }
                          text={"Camera 7"}
                        />
                      </div>
                    </Flex>
                  </div>
                )}
              </div>
              <div className="w-[40%] relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full p-4 bg-white rounded-md"
                />
                <FaSearch className={"absolute top-5 right-5"} />
              </div>
              <div className="w-[30%] right-2 relative">
                <Flex className={"justify-end gap-5"}>
                  <div className="flex gap-x-2" onClick={toggleUser}>
                    <FaUser />
                    <FaSortDown />
                  </div>
                  <div>
                    <FaShoppingCart />
                  </div>
                </Flex>
                {user && (
                  <div className="w-[200px] shadow-xl absolute top-[60px] right-[100px] z-50 bg-gray-50">
                    <div className="text-center ">
                      <Link to="/myAccount">
                      <Text
                        as={"p"}
                        className={
                          "text-[14px] text-[#262626] px-12 py-6 hover:bg-black hover:text-white hover:font-bold hover:duration-300"
                        }
                        text={"My Account"}
                      />
                      </Link>
                    </div>
                    <div className="text-center ">
                      <Link to="/signup">
                      <Text
                        as={"p"}
                        className={
                          "text-[14px] text-[#262626] px-12 py-6 hover:bg-black hover:text-white hover:font-bold hover:duration-300"
                        }
                        text={"Sign-Up"}
                      /></Link>
                    </div>
                    <div className="text-center ">
                     <Link to="/login">
                     <Text
                        as={"p"}
                        className={
                          "text-[14px] text-[#262626] px-12 py-6 hover:bg-black hover:text-white hover:font-bold hover:duration-300"
                        }
                        text={"Log-In"}
                      />
                     </Link>
                    </div>
                  </div>
                )}
              </div>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
