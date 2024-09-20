import { loginRequest } from "@/config/auth/auth.config";
import { callImageMsgraph, callMsGraph } from "@/graph";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import UserDetails from "../userDetails";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
export const UserContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then(
            (response: React.SetStateAction<null>) => setGraphData(response)
          );
          callImageMsgraph(response.accessToken).then((response) =>
            setPhoto(!!response ? URL.createObjectURL(response) : undefined)
          );
        });
    }
  }, [instance, accounts]);
  console.log("PHOTO:", photo);
  return (
    <>
      <h5 className="card-title text-center">Welcome {accounts[0].name}</h5>
      <br />
      {graphData ? (
        <UserDetails graphData={graphData} photo={photo} />
      ) : (
        <p>...isLoading</p>
      )}
    </>
  );
};
