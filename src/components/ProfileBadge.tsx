import React from "react";
import { FaStar } from "react-icons/fa";

const ProfileBadge = () => {
  return (
    <div className="flex items-center justify-start gap-10">
      <img
        src="/avatar.png"
        alt="avatar"
        className="rounded-full w-36 aspect-square"
      />
      <div>
        <h2 className="text-xl font-semibold">Helen Wilson</h2>
        <p>82 reviews</p>
        <div className="text-[#E6C83C] flex gap-1">
          {...new Array(5).fill(<FaStar size={15} />)}
        </div>
      </div>
    </div>
  );
};

export default ProfileBadge;
