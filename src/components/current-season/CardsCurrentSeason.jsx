import useDeviceType from "../../hook/useDeviceType";
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
  const deviceType = useDeviceType();
  const pathLink = car
    ? `/Current-Season/Teams/${id}`
    : `/Current-Season/Drivers/${id}`;
  return (
    <CardContainer variant={bg} BgColor={BgColor} deviceType={deviceType}>
      <HeaderContainer to={pathLink}>
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
