import { useCalendar } from "../../../hook/useCalendar";
import { AccordionCard } from "../AccordionCard";
import { FixtureCard } from "../FixtureCard";
import { InfoPastRace } from "./InfoPastRace";

export const PastRaces = () => {
  const { pastRaces } = useCalendar();

  return (
    <>
      {pastRaces?.reverse().map((item, index) => (
        <FixtureCard
          key={index}
          circuit={item.raceName}
          round={item.round}
          location={item.Circuit.Location.country}
          date={item.date}
          title={"More info race..."}
        >
          <InfoPastRace round={item.round} />
        </FixtureCard>
      ))}
    </>
  );
};
