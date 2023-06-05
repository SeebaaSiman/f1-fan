export const useProfileTeam = (id) => {
  const { data: data1 } = useAxios(
    `${API_BASE_URL}constructors/${id}/constructorStandings.json`
  );
  console.log(data1);
  return { data1 };
};
