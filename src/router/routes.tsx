import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Layout } from "../Layout";
import { ProfileForm } from "../components/Profile/ProfileForm";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "",
        element: <Profile />,
        children: [
          {
            path: "profile",
            element: <ProfileForm />,
          },
          {
            path: "help",
            element: (
              <div className="text-2xl text-center py-10 flex-1">help</div>
            ),
          },

          {
            path: "favorites",
            element: (
              <div className="text-2xl text-center py-10 flex-1">favorites</div>
            ),
          },
          {
            path: "orders",
            element: (
              <div className="text-2xl text-center py-10 flex-1">orders</div>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
