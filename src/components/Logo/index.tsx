import { Link } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";

export const Logo = () => (
  <Link to={PATHNAMES.HOME} className="md:text-2xl font-bold">
    Logo
  </Link>
);
