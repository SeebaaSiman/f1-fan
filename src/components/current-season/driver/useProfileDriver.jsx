import { useEffect, useState } from "react";

import { useAxios, API_BASE_URL } from "@/hook";
import { driversCurrent } from "@/components";
export const useProfileDriver = (id) => {
  const { data: data1 } = useAxios(
    `${API_BASE_URL}drivers/${id}/driverStandings.json`
  );
  const depur = data1?.MRData.StandingsTable.StandingsLists;
  const { data: data2 } = useAxios(
    `https://ergast.com/api/f1/current/drivers/${id}/driverStandings.json`
  );
  const depur2 =
    data2?.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  const variant = depur2?.Constructors[0].name;
  const name = depur2?.Driver.givenName;
  const name2 = depur2?.Driver.familyName;
  const numberDriver = depur2?.Driver.permanentNumber;
  const img = driversCurrent[depur2?.Driver.familyName] || "";

  const [pointsTotal, setPointsTotal] = useState(0);
  const [constructorsName, setConstructorsName] = useState([]);
  const [winsTotal, setWinsTotal] = useState(0);
  const [championsWorlds, setChampionsWorlds] = useState(0);
  const [bestPosition, setBestPosition] = useState(0);

  useEffect(() => {
    const getPointsTotal = (depur, depur2) => {
      const arrPoints = depur?.map((item) =>
        parseInt(item.DriverStandings[0].points)
      );
      const pointsCurrent = parseInt(depur2?.points);
      const concatenar = arrPoints?.concat(pointsCurrent);
      const sum = concatenar?.reduce(
        (accumulator, currentValue) => accumulator + parseInt(currentValue),
        0
      );
      return sum;
    };

    const total = getPointsTotal(depur, depur2);
    setPointsTotal(total);
  }, [depur, depur2]);

  useEffect(() => {
    const getUniqueConstructorNames = (depur) => {
      const allConstructorNames = depur?.map(
        (item) => item.DriverStandings[0].Constructors[0].name
      );
      const uniqueConstructorNames = allConstructorNames?.filter(
        (name, index, self) => self.indexOf(name) === index
      );
      return uniqueConstructorNames;
    };
    const total = getUniqueConstructorNames(depur);
    setConstructorsName(total);
  }, [depur]);

  useEffect(() => {
    const getWinsTotal = (depur, depur2) => {
      const arrWins = depur?.map((item) =>
        parseInt(item.DriverStandings[0].wins)
      );
      const winsCurrent = parseInt(depur2?.wins);
      const concatenar = arrWins?.concat(winsCurrent);
      const sum = concatenar?.reduce(
        (accumulator, currentValue) => accumulator + parseInt(currentValue),
        0
      );
      return sum;
    };
    const total = getWinsTotal(depur, depur2);
    setWinsTotal(total);
  }, [depur, depur2]);

  useEffect(() => {
    const getChampionsWorld = (depur) => {
      const arrPosition = depur?.map((item) =>
        parseInt(item.DriverStandings[0].position)
      );
      const count = arrPosition?.filter((position) => position === 1).length;
      return count;
    };

    const total = getChampionsWorld(depur);
    setChampionsWorlds(total);
  }, [depur]);

  useEffect(() => {
    const getBestPosition = (depur) => {
      const arrPosition = depur?.map((item) =>
        parseInt(item.DriverStandings[0].position)
      );
      const lowestNumber = arrPosition?.length
        ? Math.min(...arrPosition)
        : null;
      return lowestNumber;
    };
    const total = getBestPosition(depur);
    setBestPosition(total);
  }, [depur]);

  return {
    pointsTotal,
    constructorsName,
    winsTotal,
    championsWorlds,
    bestPosition,
    variant,
    depur2,
    name,
    name2,
    numberDriver,
    img,
  };
};
