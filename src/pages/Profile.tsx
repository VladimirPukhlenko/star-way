import { BreadcrumbNav } from "../components/BreadcrumbNav";

import { Outlet } from "react-router-dom";
import { ProfileMenu } from "../components/Profile/ProfileMenu";
import { ProfileBadge } from "../components/Profile/ProfileBadge";

export const Profile = () => (
  <div className="relative py-14">
    <div className="flex gap-5 relative h-full">
      <div className="absolute -top-8 left-0">
        <BreadcrumbNav />
      </div>
      <div className="w-1/3 flex flex-col gap-5 p-5 ">
        <ProfileBadge />
        <ProfileMenu />
      </div>
      <Outlet />
    </div>
  </div>
);
