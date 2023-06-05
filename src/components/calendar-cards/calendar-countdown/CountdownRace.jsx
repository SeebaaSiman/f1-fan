import styled from "styled-components";
import { BoxStyle } from "@/Layout/StylesGlobal";
import { CountdownTimer,InfoUpcoming ,AccordionCard} from "@/components";
import { FlagCountry,useCalendar } from "@/hook";
export const CountdownRace = () => {
  const { nextRace } = useCalendar();
  return (
    <CountContainer>
      <h1>Fórmula 1 Calendar 2023</h1>
      {nextRace ? (
        <div>
          <FromContainer>
            <span>Próxima carrera:</span>
            <h2>{nextRace.raceName}</h2>
            <FlagCountry
              countryName={nextRace.Circuit.Location.country}
              size={50}
            />
          </FromContainer>
          <TimeContainer>
            <span>Comienza en:</span>
            <CountdownTimer
              targetDate={new Date(`${nextRace.date}T${nextRace.time}`)}
            />
          </TimeContainer>
          <AccordionCard title={"More info..."}>
            <InfoUpcoming
              FirstPracticeDate={nextRace.FirstPractice.date}
              FirstPracticeTime={nextRace.FirstPractice.time}
              SecondPracticeDate={nextRace.SecondPractice.date}
              SecondPracticeTime={nextRace.SecondPractice.time}
              QualifyingDate={nextRace.Qualifying.date}
              QualifyingTime={nextRace.Qualifying.time}
              RaceDate={nextRace.date}
              RaceTime={nextRace.time}
            />
          </AccordionCard>
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
`;
const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 2rem; */
  font-size: 1.5rem;

  span {
    margin-left: 1rem;
  }
`;
