import styled from "styled-components";
import { useCalendar } from "@/hook";

export const InfoUpcoming = ({
  FirstPracticeDate,
  FirstPracticeTime,
  SecondPracticeDate,
  SecondPracticeTime,
  QualifyingDate,
  QualifyingTime,
  RaceDate,
  RaceTime,
  SprintDate,
  SprintTime,
  Sprint,
}) => {
  const { getShortDayOfWeek, convertTimeZone } = useCalendar();
  return (
    <InfoContainer>
      <Info>
        <h3>Practice 1</h3>
        <span>{getShortDayOfWeek(FirstPracticeDate)}</span>
        <div>{`${convertTimeZone(FirstPracticeTime)} hs`}</div>
      </Info>
      <Info>
        <h3>Practice 2</h3>
        <span>{getShortDayOfWeek(SecondPracticeDate)}</span>
        <div>{`${convertTimeZone(SecondPracticeTime)} hs`}</div>
      </Info>
      <Info>
        <h3>Qualifing</h3>
        <span>{getShortDayOfWeek(QualifyingDate)}</span>
        <div>{`${convertTimeZone(QualifyingTime)} hs`}</div>
      </Info>
      {Sprint && (
        <Info>
          <h3>Sprint</h3>
          <span>{getShortDayOfWeek(SprintDate)}</span>
          <div>{`${convertTimeZone(SprintTime)} hs`}</div>
        </Info>
      )}
      <Info>
        <h3>Race</h3>
        <span>{getShortDayOfWeek(RaceDate)}</span>
        <div>{`${convertTimeZone(RaceTime)} hs`}</div>
      </Info>
    </InfoContainer>
  );
};
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  h3 {
    margin-left: 1rem;
  }
  span {
    margin-left: 1rem;
  }
  div {
    margin-left: 1rem;
    border-radius: 25px;
    background-color: grey;
    color: white;
    padding: 5px;
  }
`;
