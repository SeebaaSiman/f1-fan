import styled from "styled-components";
import { CountdownRace } from "../components/calendar-cards/CountdownRace";
import { Upcoming } from "../components/calendar-cards/Upcoming";
import { PastRaces } from "../components/calendar-cards/PastRaces";

export const Calendar = () => {
  return (
    <CalendarContainer>
      <CountdownRace />
      <h1>Siguientes carreras</h1>
      <Upcoming />
      <h1>Carreras anteriores</h1>
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
  h1 {
    margin: 1rem;
  }
`;
