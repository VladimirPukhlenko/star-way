import { Navigate, createBrowserRouter } from "react-router-dom";

import Profile from "../pages/Profile";
import App from "../App";
import ProfileForm from "../components/ProfileForm";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" replace={true} />,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "home",
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
