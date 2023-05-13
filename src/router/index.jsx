import { createBrowserRouter } from "react-router-dom";
import { Calendar } from "../pages/Calendar";
import { CurrentSeason, History, News, Tools, NotFound } from "../pages";
import { Layout } from "../Layout";
import { DriversSeason } from "../components/current-season/DriversSeason";
import { TeamsSeason } from "../components/current-season/TeamsSeason";
import { Upcoming } from "../components/calendar-cards/Upcoming";
import { PastRaces } from "../components/calendar-cards/PastRaces";

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
          { path: "Teams", element: <TeamsSeason /> },
        ],
      },
      { path: "News", element: <News /> },
      { path: "History", element: <History /> },
      { path: "Tools", element: <Tools /> },
    ],
  },
]);

//Rutas anidadas en children, todas responden al error NotFound y van a ser renderizadas esas rutas dentro de outled en layout
// https://www.youtube.com/watch?v=byW9ULUScHI
// Ver Loader y useLoader para hacer fetch
// Ver params para según el id por ejemplo cambiar la ruta al hacer click
