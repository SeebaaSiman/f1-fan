import { API_BASE_URL, CURRENTyear } from "@/hook/helpers";
import { useAxios } from "@/hook/useAxios";
import {
  BgColor,
  driversHelmet,
  HeaderPastRace,
  Desktop,
  HelmetContainer,
  Mobile,
  PastRaceContainer,
  Tablet,
} from "@/components";
import { useMemo } from "react";

export const InfoPastRace = ({ round }) => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/${round}/results.json`
  );
  const races = data?.MRData.RaceTable.Races[0].Results;
  return (
    <>
      <HeaderPastRace />

      {races?.map((item, index) => {
        const hbg = index < 3;

        return (
          <PastRaceContainer
            key={index}
            hbg={hbg}
            variant={item.Constructor.name}
            BgColor={BgColor}
          >
            <Mobile>
              <h5>{item.position}</h5>
            </Mobile>
            <Tablet>
              <h5 key={index}>{item.grid}</h5>
            </Tablet>
            <Mobile ss={true}>
              {item.FastestLap?.rank === "1" ? (
                <HelmetContainer>
                  <h5
                    key={index}
                    style={{ color: "red" }}
                  >{`${item.Driver.givenName} ${item.Driver.familyName}`}</h5>
                  <img
                    src={driversHelmet[item.Driver.familyName] || ""}
                    alt=""
                  />
                </HelmetContainer>
              ) : (
                <h5
                  key={index}
                >{`${item.Driver.givenName} ${item.Driver.familyName}`}</h5>
              )}
            </Mobile>
            <Desktop ss={true}>
              <h5 key={index}>{item.Constructor.name}</h5>
            </Desktop>
            <Tablet>
              <h5 key={index}>{item.laps}</h5>
            </Tablet>
            <Mobile ss={true}>
              {item.status == "Finished" ? (
                <h5 key={index}>{item.Time?.time}</h5>
              ) : (
                <h5>{item.status}</h5>
              )}
            </Mobile>
            <Mobile>
              <h5 key={index}>{item.points}</h5>
            </Mobile>
            <Desktop>
              {item.FastestLap?.rank === "1" ? (
                <h5 key={index}>{item.FastestLap?.Time.time}</h5>
              ) : (
                <h5>{"-"}</h5>
              )}
            </Desktop>
          </PastRaceContainer>
        );
      })}
    </>
  );
};
