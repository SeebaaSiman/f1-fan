import { CardsCurrentSeason } from "./CardsCurrentSeason";
import { API_BASE_URL, CURRENTyear } from "../../hook/api";
import useAxios from "../../hook/useAxios";
import { Logo, TeamCar } from "./dataImage";

export const TeamsSeason = () => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/constructorStandings.json`
  );
  const depur =
    data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

  return (
    <>
      {depur?.map((c, index) => (
        <CardsCurrentSeason
          key={index}
          surname={
            c.Constructor.name === "Alpine F1 Team"
              ? "Alpine"
              : c.Constructor.name === "Haas F1 Team"
              ? "Haas"
              : c.Constructor.name
          }
          // surname={c.Constructor.name}
          points={c.points}
          position={c.position}
          wins={c.wins}
          bg={c.Constructor.name}
          logo={Logo[c.Constructor.name || ""]}
          car_piloto={TeamCar[c.Constructor.name] || ""}
        />
      ))}
    </>
  );
};
