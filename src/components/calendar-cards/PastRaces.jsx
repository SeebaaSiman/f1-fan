import { useCalendar } from "../../hook/useCalendar";
import { FixtureCard } from "./FixtureCard";
import { InfoPastRace2 } from "./InfoPastRace2";

export const PastRaces = () => {
  const { pastRaces } = useCalendar();
  // console.log(pastRaces);
  return (
    <>
      {pastRaces?.map((item, index) => (
        <FixtureCard
          key={index}
          circuit={item.raceName}
          round={item.round}
          location={item.Circuit.Location.country}
          date={item.date}
          title={"More info..."}
        >
          <InfoPastRace2 round={item.round} />
        </FixtureCard>
      ))}
    </>
  );
};
