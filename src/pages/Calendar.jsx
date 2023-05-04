import styled from "styled-components";

export const Calendar = () => {
  return (
    <CalendarContainer>
      <h1>Fórmula 1 Calendar 2023</h1>
      <CountContainer>
        <FromContainer>Siguiente carrera</FromContainer>
        <TimeContainer>Comienza en</TimeContainer>
      </CountContainer>
      Primera sección calendar con un tiempo en reversa de la próxima carrera
    </CalendarContainer>
  );
};
const CalendarContainer = styled.div`
  width: 100%;
  background-color: red;
  /* color: white; */
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountContainer = styled.div`
  background-color: white;
  width: 90%;
`;
const FromContainer = styled.div``;
const TimeContainer = styled.div``;
