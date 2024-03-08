import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const footerLinks = [
  {
    title: "Privacy Policy",
    id: 1,
    href: "#",
  },
  {
    title: "Contract-offer",
    id: 2,
    href: "#",
  },
  {
    title: "FAQ",
    id: 3,
    href: "#",
  },
  {
    title: "Payments",
    id: 4,
    href: "#",
  },
  {
    title: "Help",
    id: 5,
    href: "#",
  },
  {
    title: "Feedback",
    id: 6,
    href: "#",
  },
  {
    title: "Safety rules",
    id: 7,
    href: "#",
  },
];
const Footer = () => {
  return (
    <div className="h-[126px] bg-lightBlue flex justify-center items-center text-sm font-semibold">
      <div className="container  flex justify-between items-center">
        <Logo />

        <div className="flex items-center justify-center gap-2 ">
          <div>support@Dealyoop.com</div>
          <div>(425) 505-3804</div>
        </div>
        <div className="flex gap-2">
          {footerLinks.map((linkData) => (
            <Link to={linkData.href} key={linkData.id}>
              {linkData.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
