import { loginRequest } from "@/config/auth/auth.config";
import { useMsal } from "@azure/msal-react";

export const LogInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "redirect") {
      instance
        .loginRedirect(loginRequest)
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className=" border-[#004C55] rounded-[7px] mt-[20px]">
      <button
        className="bg-[#004C55] text-[#FFFFFF] py-[8px] px-[24px] w-[150px] rounded gap-[100px]"
        onClick={() => handleLogin("redirect")}
      >
        Log in
      </button>
    </div>
  );
};
