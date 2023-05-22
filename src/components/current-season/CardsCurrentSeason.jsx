import {
  BgColor,
  CardContainer,
  Divider,
  FooterContainer,
  HeaderContainer,
  // LeftContainer,
  // RightContainer,
} from "./CardStyle";

export const CardsCurrentSeason = ({
  name,
  surname,
  points,
  position,
  wins,
  logo,
  car,
  piloto,
  bg,
}) => {
  return (
    <CardContainer variant={bg} BgColor={BgColor}>
      <HeaderContainer>
        <img src={logo} />
        <Divider variant={bg} BgColor={BgColor} />
        <h2>{name}</h2>
        <h1>{surname}</h1>
      </HeaderContainer>
      <FooterContainer variant={car ? "car" : "piloto"}>
        <h1>{position}° position</h1>
        <h2>
          {points} points {wins > 0 ? <span>{`(${wins} wins)`}</span> : null}
        </h2>
        {car ? (
          <img src={car} variant={"car"} />
        ) : (
          <img src={piloto} variant={"piloto"} />
        )}
      </FooterContainer>
    </CardContainer>
  );
};
