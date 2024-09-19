import { useMsal } from "@azure/msal-react";

export const LogOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType: string) => {
    if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  return (
    <div className=" border-[#004C55] rounded-[7px] mt-[20px]">
      <button
        className="bg-[#004C55] text-[#FFFFFF] py-[8px] px-[24px] w-[150px] rounded gap-[100px]"
        onClick={() => handleLogout("redirect")}
      >
        Log out
      </button>
    </div>
  );
};
