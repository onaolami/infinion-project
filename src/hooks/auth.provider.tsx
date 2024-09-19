import { msalConfig } from "@/config/auth/auth.config";
import { PublicClientApplication } from "@azure/msal-browser";


export const msalInstance = new PublicClientApplication(msalConfig);