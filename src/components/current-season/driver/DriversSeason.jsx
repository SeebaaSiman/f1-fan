import styled from "styled-components";
import { useAxios, API_BASE_URL, CURRENTyear } from "@/hook";
import { CardsCurrentSeason } from "../CardsCurrentSeason";
import { Logo, driversCurrent } from "../dataImage";
import { useMemo } from "react";
export const DriversSeason = () => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/driverStandings.json`
  );
  const depur = useMemo(
    () => data?.MRData.StandingsTable.StandingsLists[0].DriverStandings,
    [data]
  );

  return (
    <Container>
      {depur?.map((c, index) => (
        <CardsCurrentSeason
          key={index}
          id={c.Driver.driverId}
          name={c.Driver.givenName}
          surname={c.Driver.familyName}
          points={c.points}
          position={c.position}
          wins={c.wins}
          bg={c.Constructors[0].name}
          logo={Logo[c.Constructors[0].name || ""]}
          piloto={driversCurrent[c.Driver.familyName] || ""}
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
