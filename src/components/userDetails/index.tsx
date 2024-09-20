import { IGraphData } from "@/types";
import avatar from "@/assets/avatar.svg";
import { LogOutButton } from "../logoutButton";

interface IProps {
  graphData: IGraphData;
  photo: any;
}
const UserDetails = ({ graphData, photo }: IProps) => {
  return (
    <div className=" gap-5 bg-white shadow-2xl  m-[0,auto] p-8 w-[535px] rounded-[10px] border-[1px] border-solid bg-foundation-black-3 border-[#f5f5f5] flex  mx-auto mb-5">
      <div>
        <img
          className="w-[100px] aspect-square rounded-full overflow-hidden object-cover h-auto"
          src={!photo ? photo : avatar}
          alt="user avatar"
        />
      </div>
      <div className="flex-1 ">
        <p>{graphData.id}</p>
        <p className="text-2xl font-semibold">
          {graphData.surname} {graphData.givenName}
        </p>
        <p>{graphData.mail}</p>
        <p>{graphData.jobTitle}</p>
        <LogOutButton />
      </div>
      
    </div>
  );
};

export default UserDetails;
