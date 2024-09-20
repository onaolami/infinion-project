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
      <div className="flex-[3]">
        <h1 className="text-[#292929] text-4xl font-bold pb-4">
          Welcome To Lorem
        </h1>
        <p className=" text-[#575757]">
          Lorem ipsum dolor sit amet consectetur. Sagittis
          <br /> eget eget erat varius ultrices velit id dictumst. Id adipiscing
          nisl.
        </p>
        <div className=" border-[#004C55] rounded-[7px] mt-[20px]">
          {isAuthenticated ? <LogOutButton /> : <LogInButton />}
        </div>
      </div>

      <div className="relative h-[calc(100vh_-_80px)] flex items-center flex-[2]">
        {/* <img className=" absolute  w-[500px] h-[800px]" src={image1} alt="" /> */}
        <div className="absolute top-0 left-10 h-full w-full bg-[#004C55] z-[-1]" />
        <img
          className="w-auto max-w-full h-[80%] object-cover object-center relative"
          src={image2}
          alt=""
        />
        <img className="absolute top-[30%] right-0 h-16" src={image3} alt="" />

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
