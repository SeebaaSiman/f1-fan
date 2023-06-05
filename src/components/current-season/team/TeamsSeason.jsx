import styled from "styled-components";
import { CardsCurrentSeason } from "../CardsCurrentSeason";
import { Logo, TeamCar } from "../dataImage";
import { useAxios, API_BASE_URL, CURRENTyear } from "@/hook";

export const TeamsSeason = () => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/constructorStandings.json`
  );
  const depur =
    data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

  return (
    <Container>
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
          points={c.points}
          position={c.position}
          wins={c.wins}
          bg={c.Constructor.name}
          logo={Logo[c.Constructor.name] || ""}
          car={TeamCar[c.Constructor.name] || ""}
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
