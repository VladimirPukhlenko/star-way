import { Link } from "react-router-dom";

import { FOOTER_LINKS } from "./constants";
import { Logo } from "../Logo";

export const Footer = () => (
  <div className="h-footerHeight  flex justify-center items-center bg-lightBlue text-sm font-semibold">
    <div className="container flex justify-between items-center">
      <Logo />

      <div className="flex items-center justify-center gap-2 ">
        <div>support@Dealyoop.com</div>
        <div>(425) 505-3804</div>
      </div>
      <div className="flex gap-2">
        {FOOTER_LINKS.map((linkData) => (
          <Link to={linkData.href} key={linkData.id}>
            {linkData.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
);
