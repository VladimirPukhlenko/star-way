import { Link } from "react-router-dom";

import { IMAGES_DATA } from "./constants";

export const Banners = () => (
  <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
    {IMAGES_DATA.map(({ linkUrl, imgUrl, id, desc }) => (
      <Link to={linkUrl} key={id}>
        <img src={imgUrl} alt={desc} className="rounded-md" />
      </Link>
    ))}
  </div>
);
