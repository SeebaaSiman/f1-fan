import { useState, useEffect } from "react";
import { getDriverStandings } from "../hook/api.js";
export const Home = () => {
  const season = "1998";
  const [driverStandings, setDriverStandings] = useState([]);
  useEffect(() => {
    const fetchDriverStandings = async () => {
      const standings = await getDriverStandings(season);
      setDriverStandings(standings);
    };

    fetchDriverStandings();
  }, [season]);
  console.log(driverStandings);
  return (
    <div>
      <h2>{`Clasificación de pilotos - Temporada ${season}`}</h2>
      <ul>
        {driverStandings.map((driver) => (
          <li key={driver.Driver.driverId}>
            {`${driver.position}. ${driver.Driver.givenName} ${driver.Driver.familyName}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
