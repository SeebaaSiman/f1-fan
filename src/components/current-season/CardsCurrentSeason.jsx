import {
  BgColor,
  CardContainer,
  Divider,
  FooterContainer,
  HeaderContainer,
  Podium,
} from "./";

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
  id,
}) => {
  return (
    <CardContainer variant={bg} BgColor={BgColor}>
      <HeaderContainer
        to={
          car ? `/Current-Season/Teams/${id}` : `/Current-Season/Drivers/${id}`
        }
      >
        <img src={logo} />
        <Divider />
        <h2>{name}</h2>
        <h1>{surname}</h1>
      </HeaderContainer>
      <FooterContainer variant={car ? "car" : "piloto"}>
        <Podium position={position} />
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
