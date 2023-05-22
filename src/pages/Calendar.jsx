import styled from "styled-components";
import { Upcoming } from "../components/calendar-cards/next-races/Upcoming";
import { PastRaces } from "../components/calendar-cards/results-races/PastRaces";
import { CountdownRace } from "../components/calendar-countdown/CountdownRace";

export const Calendar = () => {
  return (
    <CalendarContainer>
      <CountdownRace />
      <Title>Siguientes carreras</Title>
      <Upcoming />
      <Title>Carreras anteriores</Title>
      <PastRaces />
    </CalendarContainer>
  );
};
const CalendarContainer = styled.div`
  width: 100%;
  background-color: #222;
  /* color: white; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin: 1rem;
`;
