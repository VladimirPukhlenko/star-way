import { FaStar } from "react-icons/fa";

export const ProfileBadge = () => (
  <div className="flex items-center justify-start gap-10">
    <img
      src="/avatar.png"
      alt="avatar"
      className="rounded-full w-36 aspect-square"
    />
    <div>
      <h2 className="text-xl font-semibold">Helen Wilson</h2>
      <p>82 reviews</p>
      <div className="flex gap-1 text-gold">
        {...new Array(5).fill(<FaStar size={15} />)}
      </div>
    </div>
  </div>
);
