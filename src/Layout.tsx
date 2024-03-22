import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const Layout = () => (
  <div className="font-raleway">
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </div>
);
