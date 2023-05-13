import styled from "styled-components";
import { useCalendar } from "../../hook/useCalendar";
import { BoxStyle } from "../../Layout/StylesGlobal";

export const CountdownRace = () => {
  const arr = [
    { text: "Días", value: 22 },
    { text: "Horas", value: 22 },
    { text: "Minutos", value: 22 },
    { text: "Segundos", value: 22 },
  ];
  const { nextRace } = useCalendar();
  return (
    <CountContainer>
      <h1>Fórmula 1 Calendar 2023</h1>
      {nextRace ? (
        <div>
          <FromContainer>
            <span>Siguiente carrera:</span>
            <h2>{nextRace.raceName}</h2>
            <h4>{nextRace.Circuit.Location.country}</h4>
          </FromContainer>
          <TimeContainer>
            <span>Comienza en:</span>
            <CountdownContainer>
              {arr.map((item, index) => (
                <div key={index}>
                  <span>{item.value}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </CountdownContainer>
          </TimeContainer>
        </div>
      ) : (
        <span>No hay carreras próximas.</span>
      )}
    </CountContainer>
  );
};
const CountContainer = styled.div`
  background-color: red;
  width: 100%;
  border-radius: 0 0 60px 60px;
  display: flex;
  flex-direction: column;
  box-shadow: ${BoxStyle.boxShadow};
  h1 {
    color: black;
    margin-left: auto;
    margin-right: auto;
  }
`;
const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 10px;
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  font-size: 1.5rem;
  h2 {
    margin-top: 1rem;
    font-size: 3rem;
    margin-left: auto;
    margin-right: auto;
  }
  h4 {
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;
  }
`;
const GranPrixContainer = styled.span``;
const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 2rem; */
  font-size: 1.5rem;
  span {
    margin-left: 1rem;
  }
`;
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
