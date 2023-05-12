import axios from 'axios';

export const API_BASE_URL = 'http://ergast.com/api/f1/';
export const CURRENTyear = new Date().getFullYear();

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
// Obtener la imagen de un piloto
export const getDriverImage = async (season, driverId) => {
 const response = await axios.get(`${API_BASE_URL}${season}/drivers/${driverId}/driverStandings.json`);
 const driverUrl = response.data.MRData.DriverTable.Drivers[0].url;
 const driverImageResponse = await axios.get(driverUrl);
 return driverImageResponse.request.responseURL;
}

// Obtener la imagen de una escudería
export const getConstructorImage = async (season, constructorId) => {
 const response = await axios.get(`${API_BASE_URL}${season}/constructors/${constructorId}/constructorStandings.json`);
 const constructorUrl = response.data.MRData.ConstructorTable.Constructors[0].url;
 const constructorImageResponse = await axios.get(constructorUrl);
 return constructorImageResponse.request.responseURL;
}
export const fetchDriverImage = async (driverId) => {
 const response = await axios.get(`https://ergast.com/api/f1/drivers/${driverId}/picture`);
 const imageData = response.data;
 const base64Image = `data:image/jpeg;base64,${imageData}`;
 return base64Image;
}
