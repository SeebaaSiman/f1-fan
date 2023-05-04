import axios from 'axios';

const API_BASE_URL = 'http://ergast.com/api/f1/';
//Números de la temporada
export const getDriverStandings = async (season) => {
 const response = await axios.get(`${API_BASE_URL}${season}/driverStandings.json`);
 return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};
// Números de la carrera, según temporada y carrera
export const getRaceResults = async (season, round) => {
 const response = await axios.get(`${API_BASE_URL}${season}/${round}/results.json`);
 return response.data.MRData.RaceTable.Races[0];
};
