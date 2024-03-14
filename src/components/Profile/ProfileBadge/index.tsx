import { FaStar } from "react-icons/fa";

export const ProfileBadge = () => (
  <div className="flex flex-col lg:flex-row items-center justify-start gap-2 xl:gap-10">
    <img
      src="/avatar.png"
      alt="avatar"
      className="rounded-full w-36 xl:w-36 aspect-square"
    />
    <div className="flex-1">
      <h2 className="lg:text-xl font-semibold">Helen Wilson</h2>
      <div className="flex lg:flex-col lg:gap-1 gap-4 justify-center">
        <p className=" text-sm md:text-base">82 reviews</p>
        <div className="flex gap-1 items-center text-gold">
          {...new Array(5).fill(<FaStar className="text-xs md:text-base" />)}
        </div>
      </div>
    </div>
  </div>
);
