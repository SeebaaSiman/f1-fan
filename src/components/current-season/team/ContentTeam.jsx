import { useAxios, API_BASE_URL } from "@/hook";
import styled from "styled-components";
import { BoxStyle, device } from "../../../Layout/StylesGlobal";
import { BgColor, Divider } from "../CardStyle";
import { driversHelmet } from "../dataImage";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

export const ContentTeam = ({ id }) => {
  const { data: data1 } = useAxios(
    `https://ergast.com/api/f1/constructors/ferrari/seasons.json?limit=100`
  );
  const yearsCompetition = useMemo(
    () => data1?.MRData.SeasonTable.Seasons,
    [data1]
  );
  const [totalSeason, setTotalSeason] = useState([]);
  useEffect(() => {
    const extractSeasons = (yearsCompetition) => {
      return yearsCompetition?.map((item) => item.season);
    };
    setTotalSeason(extractSeasons(yearsCompetition));
  }, []);

  const { data: data2 } =
    useAxios(`https://ergast.com/api/f1/constructors/ferrari.json
  `);
  const infoConstructor = data2?.MRData.ConstructorTable.Constructors[0];
  const { data: data3 } = useAxios(
    `http://ergast.com/api/f1/current/drivers.json`
  );
  // console.log(data3);

  return (
    <ContainerContent variant={""} BgColor={BgColor}>
      <div>las dos imágenes de los pilotos</div>
      <div>container de información</div>
      <p>
        Full Team Name Aston Martin Aramco Cognizant F1 Team Base Silverstone,
        United Kingdom Team Chief Mike Krack Technical Chief Dan Fallows Chassis
        AMR23 Power Unit Mercedes First Team Entry 2018 World Championships N/A
        Highest Race Finish 1 (x1) Pole Positions 1 Fastest Laps N/A
      </p>
      <HeaderContainerImg>
        <h2>Alonso</h2>
        <h2>Perez</h2>
      </HeaderContainerImg>
      <HeaderContainerImg>
        <img src={driversHelmet["Alonso"] || ""} alt="Helmet" />
        <Divider />
        <img src={driversHelmet["Pérez"] || ""} alt="Helmet" />
      </HeaderContainerImg>
      <HeaderContainer></HeaderContainer>
    </ContainerContent>
  );
};

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));

  background: ${(props) => props.BgColor[props.variant] || ""};
  box-shadow: ${BoxStyle.boxShadow};
  border-radius: 25px;
  @media ${device.lg} {
  }
  @media ${device.lg} {
    margin-right: 1rem;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  justify-content: left;
  align-items: center;
  h3 {
    margin-left: 1rem;
    border-radius: 25px;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
    background-color: grey;
    color: white;
    padding: 10px;
    box-shadow: ${BoxStyle.boxShadow};
  }
  img {
    height: ${(props) => (props.deviceType === "desktop" ? "10rem" : "5rem")};
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
`;
const HeaderContainerImg = styled(HeaderContainer)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
