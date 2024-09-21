import { loginRequest } from "@/config/auth/auth.config";
import { useMsal } from "@azure/msal-react";
import { error } from "console";

export const LogInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <div className="border-[#004C55] pt-[50px]">
      <button
        className="bg-[#004C55] text-[#FFFFFF] py-[15px] px-[24px] w-[250px]  font-noto  font-bold rounded-[7px] gap-[100px] text-[22px]"
        onClick={() => handleLogin("redirect")}
      >
        Log in
      </button>
    </div>
  );
};
