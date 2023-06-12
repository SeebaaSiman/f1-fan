import styled from "styled-components";
import useDeviceType from "../../../hook/useDeviceType";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const arr = [
    { text: "Días", value: days },
    { text: "Horas", value: hours },
    { text: "Minutos", value: minutes },
    { text: "Segundos", value: seconds },
  ];
  const deviceType = useDeviceType();
  return (
    <CountdownContainer deviceType={deviceType}>
      {arr.map((item, index) =>
        item.text === "Días" && item.value === 0 ? null : (
          <div key={index}>
            <span>{item.value}</span>
            <span>{item.text}</span>
          </div>
        )
      )}
    </CountdownContainer>
  );
};
const CountdownContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.deviceType === "desktop" ? "" : "40%")};
  }
`;
