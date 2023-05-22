import styled from "styled-components";
import { useCalendar } from "../../../hook/useCalendar";

export const InfoUpcoming = ({
  FirstPracticeDate,
  FirstPracticeTime,
  SecondPracticeDate,
  SecondPracticeTime,
  QualifyingDate,
  QualifyingTime,
  RaceDate,
  RaceTime,
}) => {
  const { getShortDayOfWeek, convertTimeZone } = useCalendar();
  return (
    <InfoContainer>
      <LeftContainer>
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
      </LeftContainer>
      <RightContainer>
        <Info>
          <h3>Qualifing</h3>
          <span>{getShortDayOfWeek(QualifyingDate)}</span>
          <div>{`${convertTimeZone(QualifyingTime)} hs`}</div>
        </Info>
        <Info>
          <h3>Race</h3>
          <span>{getShortDayOfWeek(RaceDate)}</span>
          <div>{`${convertTimeZone(RaceTime)} hs`}</div>
        </Info>
      </RightContainer>
    </InfoContainer>
  );
};
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
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
