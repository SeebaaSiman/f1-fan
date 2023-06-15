import { useMemo } from "react";
import { API_BASE_URL, CURRENTyear, useCalendar, useAxios } from "@/hook";
import { HeaderPastRace } from "@/components";
import { AccordionCard } from "../AccordionCard";
import { ResultGrid } from "./ResultGrid";

export const InfoPastRace = ({ round }) => {
  const { data } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/${round}/results.json`
  );
  const races = useMemo(() => data?.MRData.RaceTable.Races[0].Results, [data]);
  const { findRoundSprint } = useCalendar();
  const sprintAvailable = findRoundSprint(round);
  const { data: data2 } = useAxios(
    `${API_BASE_URL}${CURRENTyear}/${round}/sprint.json`
  );
  const sprint = useMemo(
    () => data2?.MRData.RaceTable.Races[0]?.SprintResults,
    [data]
  );

  return (
    <>
      {sprintAvailable && sprint && (
        <>
          <h1>Sprint result</h1>
          <HeaderPastRace />
          {sprint.map((item, index) => {
            const hbg = index < 3;

            return (
              <ResultGrid
                key={index}
                hbg={hbg}
                index={index}
                variant={item.Constructor.name}
                position={item.position}
                fastestLap={item.FastestLap}
                grid={item.grid}
                familyName={item.Driver.familyName}
                givenName={item.Driver.givenName}
                constructorName={item.Constructor.name}
                points={item.points}
                status={item.status}
                time={item.Time}
                laps={item.laps}
              />
            );
          })}
        </>
      )}

      <h1>Race result</h1>
      <HeaderPastRace />
      {races?.map((item, index) => {
        const hbg = index < 3;

        return (
          <ResultGrid
            hbg={hbg}
            index={index}
            variant={item.Constructor.name}
            position={item.position}
            fastestLap={item.FastestLap}
            grid={item.grid}
            familyName={item.Driver.familyName}
            givenName={item.Driver.givenName}
            constructorName={item.Constructor.name}
            points={item.points}
            status={item.status}
            time={item.Time}
            laps={item.laps}
          />
        );
      })}
    </>
  );
};
