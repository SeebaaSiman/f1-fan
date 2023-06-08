import { useAxios, API_BASE_URL } from "@/hook";

export const ContentTeam = ({ id }) => {
  const { data: data1 } = useAxios(
    `${API_BASE_URL}constructors/ferrari.json`
  );

  return (
    <div>
      <div>las dos imágenes de los pilotos</div>
      <div>container de información</div>
      <p>
        Full Team Name Aston Martin Aramco Cognizant F1 Team Base Silverstone,
        United Kingdom Team Chief Mike Krack Technical Chief Dan Fallows Chassis
        AMR23 Power Unit Mercedes First Team Entry 2018 World Championships N/A
        Highest Race Finish 1 (x1) Pole Positions 1 Fastest Laps N/A
      </p>
    </div>
  );
};