import { Link } from "react-router-dom";

import { FOOTER_LINKS } from "./constants";
import { Logo } from "../Logo";
import { Button } from "src/design-components/Button";

export const Footer = () => (
  <div className="h-30 flex justify-center items-center bg-lightBlue text-xs md:text-sm font-semibold">
    <div className="container flex justify-between items-center gap-4">
      <Logo />
      <div className="flex flex-col-reverse gap-2 md:flex-row md:justify-around md:flex-1">
        <div className="flex items-center justify-center gap-2">
          <Button variant="link">
            <Link to="https://support@Dealyoop.com">support@Dealyoop.com</Link>
          </Button>
          <div>(425) 505-3804</div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {FOOTER_LINKS.map(({ href, id, title }) => (
            <Link to={href} key={id}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);
