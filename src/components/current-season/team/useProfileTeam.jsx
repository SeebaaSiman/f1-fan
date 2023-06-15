import { useEffect, useState } from "react";
import { useAxios, API_BASE_URL } from "@/hook";
import { useMemo } from "react";

export const useProfileTeam = (id) => {
  const { data: data1 } = useAxios(`${API_BASE_URL}/constructors/${id}.jsonn`);
  const { data: data2 } = useAxios(
    `${API_BASE_URL}drivers/${id}/driverStandings.json`
  );
  const depur = useMemo(
    () => data1?.MRData.StandingsTable.StandingsLists,
    [data1]
  );
  const [constructorsName, setConstructorsName] = useState([]);

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
  return { data1, constructorsName };
};
