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

//Rutas anidadas en children, todas responden al error NotFound y van a ser renderizadas esas rutas dentro de outled en layout
// https://www.youtube.com/watch?v=byW9ULUScHI
// Ver params para según el id por ejemplo cambiar la ruta al hacer click por ejemplo driver/:id

// Usar así el lazy ??
// const Landing = lazy(() => import('../components/Layout/Landing'));
// const Races = lazy(() => import('../features/races/components/Races'));
// const Standings = lazy(() => import('../features/rankings/components/Standings'));
// const Teams = lazy(() => import('../features/teams/components/Teams'));
// const TeamDetail = lazy(() => import('../features/teams/components/TeamDetail'));
// const DriverDetail = lazy(() => import('../features/drivers/components/DriverDetail'));
// const Drivers = lazy(() => import('../features/drivers/components/Drivers'));
// const RaceResult = lazy(() => import('../features/races/components/RaceResult'));
