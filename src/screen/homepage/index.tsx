import Body from "@/components/body";
import { Header } from "@/components/header";
import { UserContent } from "@/components/userContent";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const Homepage = () => {
  return (
    <div>
     <Body/>
    </div>
  );
};

export default Homepage;
