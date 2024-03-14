import { BreadcrumbNav } from "../components/BreadcrumbNav";

import { Outlet } from "react-router-dom";
import { ProfileMenu } from "../components/Profile/ProfileMenu";
import { ProfileBadge } from "../components/Profile/ProfileBadge";

export const Profile = () => (
  <div className="relative min-h-screenNoHeader flex items-center justify-center py-14">
    <div className="flex flex-col gap-5 relative flex-1">
      <div className="absolute -top-8 left-0">
        <BreadcrumbNav />
      </div>
      <div className="flex flex-col md:flex-row items-center lg:items-start">
        <div className="w-full md:w-1/2 flex flex-col gap-5 p-5 py-14 ">
          <ProfileBadge />
          <ProfileMenu />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);
