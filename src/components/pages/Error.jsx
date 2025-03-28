import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Container>
      <div className="text-center">
        <Text
          as="h1"
          text="404"
          className="text-[200px] font-bold pt-[120px] pb-[80px]"
        />
        <Text
          as="p"
          text="The page you were looking for couldn't be found. It might have been removed, or you might have misspelled the URL. Try searching for what you need."
          className="text-[20px] pb-12 max-w-[600px] mx-auto"
        />
        <div className="relative w-[60%] max-w-[600px] mx-auto">
          <input
            type="text"
            placeholder="Type to search"
            className="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm outline-0"
          />
          <FaSearch className="absolute text-gray-500 top-5 right-5" />
        </div>
      </div>

      <div className="text-center py-28">
        <Link to="/">
          <Button
            bText="Back To Home"
            className="text-[16px] font-bold px-28 py-8 bg-black text-white"
          />
        </Link>
      </div>
      <div className="w-[200px] shadow-xl ">
      <div className="text-center ">
      <Text
        as={"p"}
        className={
          "text-[14px] text-[#262626] px-12 py-6 hover:bg-black hover:text-white hover:font-bold hover:duration-300"
        }
        text={"My Account"}
      />
      </div>
      <div className="text-center ">
      <Text
        as={"p"}
        className={
          "text-[14px] text-[#262626] px-12 py-6 hover:bg-black hover:text-white hover:font-bold hover:duration-300"
        }
        text={"Sign-Up"}
      />
      </div>
      <div className="text-center ">
      <Text
        as={"p"}
        className={
          "text-[14px] text-[#262626] px-12 py-6 hover:bg-black hover:text-white hover:font-bold hover:duration-300"
        }
        text={"Log-In"}
      />
      </div>
    </div>
    </Container>
  );
};

export default Error;
