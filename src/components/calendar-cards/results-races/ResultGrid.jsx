import {
  BgColor,
  driversHelmet,
  Desktop,
  HelmetContainer,
  Mobile,
  PastRaceContainer,
  Tablet,
} from "@/components";

export const ResultGrid = ({
  hbg,
  variant,
  position,
  fastestLap,
  familyName,
  givenName,
  grid,
  index,
  constructorName,
  points,
  status,
  time,
  laps,
}) => {
  return (
    <PastRaceContainer
      key={index}
      hbg={hbg}
      variant={variant}
      BgColor={BgColor}
    >
      <Mobile>
        {fastestLap?.rank === "1" ? (
          <HelmetContainer>
            <h5>{position}</h5>
            <img src={driversHelmet[familyName] || ""} alt="" />
          </HelmetContainer>
        ) : (
          <h5>{position}</h5>
        )}
      </Mobile>
      <Tablet>
        <h5 key={index}>{grid}</h5>
      </Tablet>
      <Mobile ss={true}>
        {fastestLap?.rank === "1" ? (
          <h5
            key={index}
            style={{ color: "red" }}
          >{`${givenName} ${familyName}`}</h5>
        ) : (
          <h5 key={index}>{`${givenName} ${familyName}`}</h5>
        )}
      </Mobile>
      <Desktop ss={true}>
        <h5 key={index}>{constructorName}</h5>
      </Desktop>
      <Tablet>
        <h5 key={index}>{laps}</h5>
      </Tablet>
      <Mobile ss={true}>
        {status == "Finished" ? (
          <h5 key={index}>{time?.time}</h5>
        ) : (
          <h5>{status}</h5>
        )}
      </Mobile>
      <Mobile>
        <h5 key={index}>{points}</h5>
      </Mobile>
      <Desktop>
        {fastestLap?.rank === "1" ? (
          <h5 key={index}>{fastestLap?.Time.time}</h5>
        ) : (
          <h5>{"-"}</h5>
        )}
      </Desktop>
    </PastRaceContainer>
  );
};
