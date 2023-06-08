import styled from "styled-components";
import { driversHelmet } from "../dataImage";
import { BoxStyle, device } from "../../../Layout/StylesGlobal";
import { BgColor } from "../CardStyle";

export const ContentDriver = ({
  constructors,
  dataCurrent,
  totalPoints,
  totalWins,
  bestPosition,
  championsWorlds,
}) => {
  return (
    <ContainerContent
      variant={dataCurrent?.Constructors[0].name}
      BgColor={BgColor}
    >
      <HeaderContainer>
        <img
          src={driversHelmet[dataCurrent?.Driver.familyName] || ""}
          alt="Helmet"
        />
        <h1>{`${dataCurrent?.Driver.givenName} ${dataCurrent?.Driver.familyName}`}</h1>
      </HeaderContainer>
      <HeaderContainer>
        <h2>Team current</h2>
        <h3>{dataCurrent?.Constructors[0].name}</h3>
      </HeaderContainer>
      <HeaderContainer>
        <h2>Team's history</h2>
        {constructors?.map((item, index) => (
          <h3 key={index}>
            {item === "Alpine F1 Team"
              ? "Alpine"
              : item === "Haas F1 Team"
              ? "Haas"
              : item}
          </h3>
        ))}
      </HeaderContainer>
      <HeaderContainer>
        <h2>Country</h2>
        <h3>{dataCurrent?.Driver.nationality}</h3>
      </HeaderContainer>
      <HeaderContainer>
        <h2>Date of birth</h2>
        <h3>{dataCurrent?.Driver.dateOfBirth}</h3>
      </HeaderContainer>
      <HeaderContainer>
        <h2>Points total</h2>
        <h3>{totalPoints?.toLocaleString()}</h3>
      </HeaderContainer>
      <HeaderContainer>
        <h2>Wins total</h2>
        <h3>{totalWins?.toLocaleString()}</h3>
      </HeaderContainer>
      <HeaderContainer>
        <h2>Best poistion season</h2>
        <h3>{bestPosition}</h3>
      </HeaderContainer>
      <HeaderContainer>
        <h2>World Championships</h2>
        <h3>{championsWorlds}</h3>
      </HeaderContainer>
    </ContainerContent>
  );
};
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  width: 90%;
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
  margin: 1rem;
  justify-content: left;
  align-items: center;
  h3 {
    margin-left: 1rem;
    border-radius: 25px;
    background-color: grey;
    color: white;
    padding: 10px;
    box-shadow: ${BoxStyle.boxShadow};
  }
  img {
    height: 10rem;
  }
`;
