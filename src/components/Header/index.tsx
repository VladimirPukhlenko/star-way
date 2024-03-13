import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { DropdownMenu } from "../DropdownMenu";
import { Logo } from "../Logo";
import { Button } from "../ui/Button";

export const Header = () => (
  <div className="h-headerHeight flex justify-center items-center bg-lightBlue">
    <div className="container flex justify-between items-center">
      {/* logo with button */}
      <div className="flex justify-center items-center gap-4">
        <Logo />
        <DropdownMenu />
      </div>

      {/* favorites and auth button */}
      <div className="flex justify-center items-center gap-4">
        <Button colorType="link">
          <div className="flex items-center justify-center gap-2">
            <FaRegHeart size={20} />
            Favorite
          </div>
        </Button>
        <Button colorType="link">
          <Link to={"/profile"}>Profile</Link>
        </Button>
        <Button colorType="boldLink">Log in</Button>
        <Button colorType="primary">Sign Up</Button>
      </div>
    </div>
  </div>
);
