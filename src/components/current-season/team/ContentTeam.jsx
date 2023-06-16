import styled from "styled-components";
import { BoxStyle, device } from "../../../Layout/StylesGlobal";
import { BgColor, Divider } from "../CardStyle";
import { driversCurrent, driversHelmet } from "../dataImage";
import { useProfileTeam } from "./useProfileTeam";

export const ContentTeam = ({ id }) => {
  const {
    constructorsName,
    driverTwo,
    driverOne,
    infoConstructor,
    totalSeason,
  } = useProfileTeam(id);
  return (
    <ContainerContent
      variant={
        id === "Alpine F1 Team" ? "Alpine" : id === "Haas F1 Team" ? "Haas" : id
      }
      BgColor={BgColor}
    >
      <h2>Drivers</h2>

      <HeaderContainerImg>
        <h2>{driverOne}</h2>
        <h2>{driverTwo}</h2>
      </HeaderContainerImg>
      <HeaderContainerImg>
        <img src={driversHelmet[driverOne] || ""} alt="Helmet" />
        <Divider />
        <img src={driversHelmet[driverTwo] || ""} alt="Helmet" />
      </HeaderContainerImg>
      <HeaderContainerImg>
        <img src={driversCurrent[driverOne] || ""} alt="Driver" />
        <Divider />
        <img src={driversCurrent[driverTwo] || ""} alt="Driver" />
      </HeaderContainerImg>
      <HeaderContainer>
        {infoConstructor?.name}
        {/* (agregar bandera) */}

        {infoConstructor?.nationality}
      </HeaderContainer>
      {/* <HeaderContainer>Total season: {totalSeason?.length}</HeaderContainer>
      <HeaderContainer>
        Years competetion:{" "}
        {totalSeason?.map((item) => (
          <h4>{item}</h4>
        ))}
      </HeaderContainer> */}
      {/* <p>
        Full Team Name Aston Martin Aramco Cognizant F1 Team Base Silverstone,
        United Kingdom Team Chief Mike Krack Technical Chief Dan Fallows Chassis
        AMR23 Power Unit Mercedes First Team Entry 2018 World Championships N/A
        Highest Race Finish 1 (x1) Pole Positions 1 Fastest Laps N/A
      </p> */}
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
  h2 {
    margin: 0 auto 0 auto;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
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
  h4 {
    display: flex;
    flex-wrap: wrap;
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
