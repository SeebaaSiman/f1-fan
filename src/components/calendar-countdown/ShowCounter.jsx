import styled from "styled-components";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const arr = [
    { text: "Días", value: days },
    { text: "Horas", value: hours },
    { text: "Minutos", value: minutes },
    { text: "Segundos", value: seconds },
  ];
  return (
    <CountdownContainer>
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
  margin-left: auto;
  margin-right: auto;
  div {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    align-items: center;
  }
`;
const Countdown = styled.div``;
