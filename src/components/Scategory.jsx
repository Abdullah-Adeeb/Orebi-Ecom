import React from 'react'
import Text from './Text';
import Flex from './Flex';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
const Scategory = () => {
  return (
    <div className="py-12 w-[30%]">
              <Text
                as={"h1"}
                className={"text-[50px] font-bold text-[#262626]"}
                text={"Products"}
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
                  text={"Shop"}
                />
              </Flex>

              <div>
                <Text
                  as={"h4"}
                  className={"text-[20px] font-bold  text-[#262626] pb-5 "}
                  text={"Shop by Category"}
                />
                <div className="flex justify-between border-b-[1px] items-center py-3 ">
                  <Text
                    as={"p"}
                    className={"text-[16px] text-[#767676] py-3  "}
                    text={"Category 1"}
                  />
                  <GoPlus />
                </div>
                <div className="flex justify-between border-b-[1px] items-center py-3 ">
                  <Text
                    as={"p"}
                    className={"text-[16px] text-[#767676] py-3  "}
                    text={"Category 2"}
                  />
                  <GoPlus />
                </div>
                <div className="flex justify-between border-b-[1px] items-center py-3 ">
                  <Text
                    as={"p"}
                    className={"text-[16px] text-[#767676] py-3  "}
                    text={"Category 3"}
                  />
                  <GoPlus />
                </div>
                <div className="flex justify-between border-b-[1px] items-center py-3 ">
                  <Text
                    as={"p"}
                    className={"text-[16px] text-[#767676] py-3  "}
                    text={"Category 4"}
                  />
                  <GoPlus />
                </div>
                <div className="flex justify-between border-b-[1px] items-center py-3">
                  <Text
                    as={"p"}
                    className={"text-[16px] text-[#767676] py-3  "}
                    text={"Category 5"}
                  />
                  <GoPlus />
                </div>
              </div>

              <div>
                <Text
                  as={"h4"}
                  className={
                    "text-[20px] font-bold  text-[#262626] pb-5 pt-16 "
                  }
                  text={"Shop by Colour"}
                />
                <div className="flex gap-x-4 border-b-[21x] items-center py-3 ">
                  <div className="bg-black rounded-full h-[11px] w-[11px]"></div>
                  <div>
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] py-3  "}
                      text={"Color 1"}
                    />
                  </div>
                </div>
                <div className="flex gap-x-4 border-b-[1px] items-center py-3 ">
                  <div className="bg-[#FF8686] rounded-full h-[11px] w-[11px]"></div>
                  <div>
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] py-3  "}
                      text={"Color 2"}
                    />
                  </div>
                </div>
                <div className="flex gap-x-4 border-b-[1px] items-center py-3 ">
                  <div className="bg-[#7ED321] rounded-full h-[11px] w-[11px]"></div>
                  <div>
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] py-3  "}
                      text={"Color 3"}
                    />
                  </div>
                </div>
                <div className="flex gap-x-4 border-b-[1px] items-center py-3 ">
                  <div className="bg-[#B6B6B6] rounded-full h-[11px] w-[11px]"></div>
                  <div>
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] py-3  "}
                      text={"Color 4"}
                    />
                  </div>
                </div>
                <div className="flex gap-x-4 border-b-[1px] items-center py-3 ">
                  <div className="bg-[#15CBA5] rounded-full h-[11px] w-[11px]"></div>
                  <div>
                    <Text
                      as={"p"}
                      className={"text-[16px] text-[#767676] py-3  "}
                      text={"Color 5"}
                    />
                  </div>
                </div>

                <div>
                  <Text
                    as={"h4"}
                    className={
                      "text-[20px] font-bold  text-[#262626] pb-5 pt-16 "
                    }
                    text={"Shop by Brand"}
                  />
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"Brand 1"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"Brand 2"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"Brand 3"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"Brand 4"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"Brand 5"}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Text
                    as={"h4"}
                    className={
                      "text-[20px] font-bold  text-[#262626] pb-5 pt-16 "
                    }
                    text={"Shop by Price"}
                  />
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"$0.00 - $9.99"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"$10.00 - $19.99"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"$20.00 - $29.99"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"$30.00 - $39.99"}
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] py-3 ">
                    <div>
                      <Text
                        as={"p"}
                        className={"text-[16px] text-[#767676] py-3  "}
                        text={"$40.00 - $69.99"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Scategory
