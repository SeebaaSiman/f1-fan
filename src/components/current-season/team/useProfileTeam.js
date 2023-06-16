import { useEffect, useState, useMemo } from "react";
import { useAxios, API_BASE_URL } from "@/hook";
import { ProfileCar } from "../dataImage";

export const useProfileTeam = (id) => {

  const depurId = id === "Alpine F1 Team"
    ? "Alpine"
    : id === "Haas F1 Team"
      ? "Haas"
      : id.replace(/\s/g, "_")
  const { data: data1 } = useAxios(
    `${API_BASE_URL}constructors/${depurId}/seasons.json?limit=100`
  );
  const yearsCompetition = useMemo(
    () => data1?.MRData.SeasonTable.Seasons,
    [data1]
  );
  const [totalSeason, setTotalSeason] = useState([]);
  useEffect(() => {
    const extractSeasons = (yearsCompetition) => {
      return yearsCompetition?.map((item) => item.season);
    };
    setTotalSeason(extractSeasons(yearsCompetition));
  }, []);

  const { data: data2 } =
    useAxios(`${API_BASE_URL}constructors/${depurId}.json
      `);
  // name y nationality
  const infoConstructor = useMemo(
    () => data2?.MRData.ConstructorTable.Constructors[0],
    [data2]
  );

  const { data: data3 } = useAxios(
    `${API_BASE_URL}current/constructors/${depurId}/drivers.json`
  );
  const driverOne = useMemo(
    () => data3?.MRData?.DriverTable?.Drivers[0]?.familyName,
    [data3]
  );
  const driverTwo = useMemo(
    () => data3?.MRData?.DriverTable?.Drivers[1]?.familyName,
    [data3]
  );
  const constructorsName = useMemo(() => infoConstructor?.name, [infoConstructor])
  const imgCar = ProfileCar[depurId] || "";
  return { constructorsName, imgCar, totalSeason, driverOne, driverTwo, infoConstructor };
};