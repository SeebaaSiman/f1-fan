import { useCalendar } from "../../../hook/useCalendar";
import { FixtureCard } from "../FixtureCard";
import { InfoUpcoming } from "./InfoUpcoming";

export const Upcoming = () => {
  const { upcomingRaces } = useCalendar();
  return (
    <>
      {upcomingRaces?.map((item, index) => (
        <FixtureCard
          key={index}
          title={item.raceName}
          round={item.round}
          date={`${item.FirstPractice.date} - ${item.date}`}
          circuit={item.Circuit.Location.locality}
          location={item.Circuit.Location.country}
        >
          <InfoUpcoming
            FirstPracticeDate={item.FirstPractice.date}
            FirstPracticeTime={item.FirstPractice.time}
            SecondPracticeDate={item.SecondPractice.date}
            SecondPracticeTime={item.SecondPractice.time}
            QualifyingDate={item.Qualifying.date}
            QualifyingTime={item.Qualifying.time}
            RaceDate={item.date}
            RaceTime={item.time}
            Sprint={item.Sprint}
            SprintDate={item.Sprint?.date}
            SprintTime={item.Sprint?.time}
          />
        </FixtureCard>
      ))}
    </>
  );
};
