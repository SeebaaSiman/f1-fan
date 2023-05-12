import {
  BgColor,
  CardContainer,
  Divider,
  FooterContainer,
  HeaderContainer,
  LeftContainer,
  RightContainer,
} from "./CardStyle";

export const CardsCurrentSeason = ({
  name,
  surname,
  points,
  position,
  wins,
  logo,
  car_piloto,
  bg,
}) => {
  return (
    <CardContainer variant={bg} BgColor={BgColor}>
      <LeftContainer>
        <HeaderContainer>
          <img src={logo} />
          <Divider variant={bg} BgColor={BgColor} />
          <h2>{name}</h2>
          <h1>{surname}</h1>
        </HeaderContainer>
        <FooterContainer>
          <h1>{position}° position</h1>
          <h2>{points} points</h2>
          {wins > 0 ? <h3>Wins: {wins}</h3> : null}
        </FooterContainer>
      </LeftContainer>

      <RightContainer>
        <img src={car_piloto} />
      </RightContainer>
    </CardContainer>
  );
};
