import { API_BASE_URL, CURRENTyear } from "../../hook/api";
import { CardsCurrentSeason } from "./CardsCurrentSeason";
import { Logo, driversCurrent } from "./dataImage";
import useAxios from "../../hook/useAxios";

export const DriversSeason = () => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/driverStandings.json`
  );
  const depur = data?.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  return (
    <>
      {depur?.map((c, index) => (
        <CardsCurrentSeason
          key={index}
          name={c.Driver.givenName}
          surname={c.Driver.familyName}
          points={c.points}
          position={c.position}
          wins={c.wins}
          bg={c.Constructors[0].name}
          logo={Logo[c.Constructors[0].name || ""]}
          car_piloto={driversCurrent[c.Driver.familyName] || ""}
        />
      ))}
    </>
  );
};