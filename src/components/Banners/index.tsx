import { Link } from "react-router-dom";
import { IMAGES_DATA } from "./constants";

export const Banners = () => (
  <div className="flex justify-center items-center gap-2">
    {IMAGES_DATA.map((imgData) => {
      return (
        <Link to={imgData.linkUrl} key={imgData.id}>
          <img src={imgData.imgUrl} alt={imgData.desc} className="rounded-md" />
        </Link>
      );
    })}
  </div>
);
