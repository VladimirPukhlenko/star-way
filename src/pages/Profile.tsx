import ProfileBadge from "../components/ProfileBadge";
import ProfileMenu from "../components/ProfileMenu";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="h-[calc(100vh-(72px+128px))] relative py-12 ">
      <div className="flex gap-5 relative  h-full ">
        <div className=" absolute -top-8 left-0">
          <BreadcrumbNav></BreadcrumbNav>
        </div>
        <div className="w-1/3 p-5 flex flex-col gap-5">
          <ProfileBadge></ProfileBadge>
          <ProfileMenu></ProfileMenu>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
