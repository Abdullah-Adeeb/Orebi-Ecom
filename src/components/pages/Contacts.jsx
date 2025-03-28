import React from "react";
import Text from "../Text";
import Flex from "../Flex";
import Container from "../Container";
import Button from "../Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
const Contacts = () => {
  return (
    <Container>
      <div>
        <div className="py-12 w-[30%]">
          <Text
            as={"h1"}
            className={"text-[50px] font-bold text-[#262626]"}
            text={"Contacts"}
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
              text={"Contacts"}
            />
          </Flex>
        </div>
      </div>
      <div className="py-[140px]">
        <Text
          as={"h1"}
          className={"text-[50px] font-bold text-[#262626]"}
          text={"Fill Up a Form"}
        />
        <div className="w-[50%]">
          <div className="outline-none border-b-1">
            <Text
              as={"p"}
              text={"Name"}
              className={"text-[16px] font-bold text-[#262626] py-3"}
            />
            <input
              type="text"
              placeholder="Your Name Here"
              className="w-full py-3 bg-white border-b border-gray-300 focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="outline-none border-b-1">
            <Text
              as={"p"}
              text={"E-Mail"}
              className={"text-[16px] font-bold text-[#262626] py-3"}
            />
            <input
              type="text"
              placeholder="Your E-mail Here"
              className="w-full py-3 bg-white focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="border-b-[1px] outline-0">
            <Text
              as={"p"}
              text={"Message"}
              className={"text-[16px] font-bold text-[#262626] py-3"}
            />
            <textarea
              placeholder="Your Message Here"
              className="w-full py-5 bg-white border-b border-gray-300 focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="pt-14 pb-28">
            <Button
              bText={"Our Brands"}
              className={"text-[16px] font-bold px-28 py-8 bg-black text-white"}
            />
          </div>

          <div className="relative py-32">
            <div className="py-8 px-5 w-[452px] absolute top-[250px] left-[90px] bg-white">
              <div className="flex justify-between border-b-[1px] items-center py-2">
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#262626] py-3  "}
                  text={"Germany Office"}
                />
                <GoPlus />
              </div>
              <div className="flex justify-between border-b-[1px] items-center py-2">
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#262626] py-3  "}
                  text={"Slovakia Office"}
                />
                <GoPlus />
              </div>
              <div className="pt-7">
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#262626] py-3"}
                  text={"Lithuania Office"}
                />
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#767676] py-3  "}
                  text={"575 Crescent Ave. Quakertown, PA 18951 "}
                />
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#767676] py-3  "}
                  text={"+432 533 12 523"}
                />
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#767676] py-3  "}
                  text={"info@domain.com"}
                />
                <Text
                  as={"p"}
                  className={"text-[16px] text-[#767676] py-3  "}
                  text={"Mon - Fri: 9am - 6pm"}
                />
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99918.38649178496!2d90.45880352897568!3d23.63294884344339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0x6d3af4457bec4c90!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1743057062649!5m2!1sen!2sbd"
                width="1400"
                height="650"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
