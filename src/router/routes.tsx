import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Layout } from "../Layout";
import { ProfileForm } from "../components/Profile/ProfileForm";
import { PATHNAMES } from "src/constants/routes";

export const router = createBrowserRouter([
  {
    path: PATHNAMES.HOME,
    element: <Layout />,
    children: [
      {
        path: PATHNAMES.HOME,
        element: <Home />,
      },
      {
        path: PATHNAMES.HOME,
        element: <Profile />,
        children: [
          {
            path: PATHNAMES.PROFILE,
            element: <ProfileForm />,
          },
          {
            path: PATHNAMES.HELP,
            element: <div className="textLayout">help</div>,
          },

          {
            path: PATHNAMES.FAVORITES,
            element: <div className="textLayout">favorites</div>,
          },
          {
            path: PATHNAMES.ORDERS,
            element: <div className="textLayout">orders</div>,
          },
        ],
      },
    ],
  },

  {
    path: PATHNAMES.UNKNOWN,
    element: <Navigate to={PATHNAMES.HOME} />,
  },
]);
