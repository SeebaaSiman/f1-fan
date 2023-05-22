import { Desktop, Mobile, PastRaceContainer, Tablet } from "./pastRaceStyle";

export const HeaderPastRace = () => {
  return (
    <PastRaceContainer>
      <Mobile>
        <h4>Position</h4>
      </Mobile>
      <Tablet>
        <h4>Grid</h4>
      </Tablet>
      <Mobile>
        <h4>Driver</h4>
      </Mobile>
      <Desktop>
        <h4>Car</h4>
      </Desktop>
      <Tablet>
        <h4>Laps</h4>
      </Tablet>
      <Mobile>
        <h4>Time</h4>
      </Mobile>
      <Mobile>
        <h4>Points</h4>
      </Mobile>
      <Desktop>
        <h4>Fastest Lap</h4>
      </Desktop>
    </PastRaceContainer>
  );
};
