import { createBrowserRouter } from "react-router-dom";
import { Calendar, CurrentSeason, History, News, NotFound } from "@/pages";
import { Layout } from "../Layout";
import { DriversSeason, TeamsSeason, ProfileId } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Calendar />,
      },
      {
        path: "Current-Season",
        element: <CurrentSeason />,
        children: [
          { path: "Drivers", element: <DriversSeason /> },
          { path: "Drivers/:id", element: <ProfileId type="drivers" /> },
          { path: "Teams", element: <TeamsSeason /> },
          { path: "Teams/:id", element: <ProfileId type="teams" /> },
        ],
      },
      { path: "News", element: <News /> },
      { path: "History", element: <History /> },
    ],
  },
]);
