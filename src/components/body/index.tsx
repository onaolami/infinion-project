import image2 from "@/assets/image2.svg";
import image3 from "@/assets/image3.svg";
import image4 from "@/assets/image4.svg";
import { useIsAuthenticated } from "@azure/msal-react";
import { LogInButton } from "../loginButton";
import { LogOutButton } from "../logoutButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-between items-center mx-10">
      <div className="flex-[3] w-[576px]  pl-[48px]">
        <h1 className="text-[#292929] text-4xl font-bold pb-4 font-montagu">
          Welcome to Lorem
        </h1>
        <div className="w-[525px]">
          <p className=" text-[#575757] font-nunito font-[500px] leading-none text-[24px]">
            Lorem ipsum dolor sit amet consectetur. Sagittis eget eget erat
            varius ultrices velit id dictumst. Id adipiscing nisl.
          </p>
        </div>

        <div className="">
          {isAuthenticated ? <LogOutButton /> : <LogInButton />}
        </div>
      </div>

      <div className="relative h-screen flex items-center flex-[2] mt">
        {/* <img className=" absolute  w-[500px] h-[800px]" src={image1} alt="" /> */}
         
          <div className="absolute top-0 left-10 h-full w-full bg-[#004C55] z-[-1]" />

          <img
            className=" w-auto h-[80%] object-cover object-center relative "
            src={image2}
            alt=""
          />

          <img
            className="absolute top-[30%] right-0 h-16"
            src={image3}
            alt=""
          />

          <img
            className="absolute left-[-20%] h-16 bottom-[30%]"
            src={image4}
            alt=""
          />
        </div>
      </div>
    
  );
};

export default Body;
