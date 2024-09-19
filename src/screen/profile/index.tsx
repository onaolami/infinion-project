import { UserContent } from "@/components/userContent";
import { AuthenticatedTemplate } from "@azure/msal-react";

 export const Profile = () => {
  return (
    <div>
      <AuthenticatedTemplate>
        <UserContent />
      </AuthenticatedTemplate>
    </div>
  );
};
