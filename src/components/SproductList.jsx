import React from 'react'
import Text from './Text';
import Flex from './Flex';
import { FaSortDown } from "react-icons/fa";
import Sproducts from './Sproducts';
const SproductList = () => {
  return (
    <div className="w-[65%]">
              <div className="pt-[260px] pb-[80px]">
                <Flex className={"gap-x-3 right-0"}>
                  <div className="flex gap-x-4 items-center relative">
                    <Text
                      as={"p"}
                      text={"Sort By :"}
                      className={"text-[16px] text-[#767676]"}
                    />
                    <input
                      type="text"
                      placeholder="Featured"
                      className=" p-2 rounded-md shadow-sm"
                    />
                    <FaSortDown className={"absolute right-3 "} />
                  </div>
                  <div className="flex gap-x-4 items-center relative">
                    <Text
                      as={"p"}
                      text={"Show :"}
                      className={"text-[16px] text-[#767676]"}
                    />
                    <input
                      type="text"
                      placeholder="36"
                      className=" py-2 px-1 rounded-md shadow-sm"
                    />
                    <FaSortDown className={"absolute right-3 "} />
                  </div>
                </Flex>
              </div>
              <div className="py-10">
                <Flex className={"justify-between gap-x-5"}>
                  <Sproducts />
                  <Sproducts />
                  <Sproducts />
                </Flex>
              </div>
              <div className="py-10">
                <Flex className={"justify-between gap-x-5"}>
                  <Sproducts />
                  <Sproducts />
                  <Sproducts />
                </Flex>
              </div>
              <div className="py-10">
                <Flex className={"justify-between gap-x-5"}>
                  <Sproducts />
                  <Sproducts />
                  <Sproducts />
                </Flex>
              </div>
              <div className="py-10">
                <Flex className={"justify-between gap-x-5"}>
                  <Sproducts />
                  <Sproducts />
                  <Sproducts />
                </Flex>
              </div>
              <div className="py-10">
                <Flex className={"justify-between gap-x-5"}>
                  <Sproducts />
                  <Sproducts />
                  <Sproducts />
                </Flex>
              </div>
              <div className="pt-14 pb-36">
                <Flex className={"gap-x-5"}>
                <Text
                    as={"p"}
                    text={"Prev"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                  <Text
                    as={"p"}
                    text={"1"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                  <Text
                    as={"p"}
                    text={"2"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                  <Text
                    as={"p"}
                    text={"3"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                  <Text
                    as={"p"}
                    text={"4"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                  <Text as={"p"} text={"..."} className={'pt-6 text-[16px]'} />
                  <Text
                    as={"p"}
                    text={"10"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                  <Text
                    as={"p"}
                    text={"Next"}
                    className={
                      "text-[16px] border-1 border-[#767676] py-4 px-5 font-semibold hover:bg-black hover:text-white"
                    }
                  />
                </Flex>
              </div>
            </div>
  )
}

export default SproductList
