import * as Unicons from "@iconscout/react-unicons";
import styled from "styled-components";

export const Podium = ({ position }) => {
  return (
    <>
      {position === "1" ? (
        <h1>
          <IconTrophy size="2.8rem" colourtrophy="1" />
        </h1>
      ) : position === "2" ? (
        <h1>
          <IconTrophy size="2.7rem" colourtrophy="2" />
        </h1>
      ) : position === "3" ? (
        <h1>
          <IconTrophy size="2.6rem" colourtrophy="3" />
        </h1>
      ) : (
        <h1>{position}° position</h1>
      )}
    </>
  );
};
const IconTrophy = styled(Unicons.UilTrophy)`
  filter: drop-shadow(1px 1px 1px #222);
  color: ${(props) => {
    if (props.colourtrophy === "1") {
      return "#FFD700";
    } else if (props.colourtrophy === "2") {
      return "#C0C0C0";
    } else if (props.colourtrophy === "3") {
      return "#CD7F32";
    }
  }};
`;
