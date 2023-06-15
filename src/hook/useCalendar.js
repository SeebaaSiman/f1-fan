import { useMemo } from "react";
import { API_BASE_URL, CURRENTyear } from "./helpers";
import { useAxios } from "./useAxios";

export const useCalendar = () => {
 const { data } = useAxios(`${API_BASE_URL}${CURRENTyear}.json`);
 const races = useMemo(() => data?.MRData.RaceTable.Races, [data]);

 const sprints = useMemo(() => races?.filter(obj => obj.Sprint), [data]);

 // Saber si la carrera está por venir
 const isRaceUpcoming = (raceDate) => {
  const today = new Date();
  const raceDay = new Date(raceDate);
  return raceDay > today;
 };

 const restRaces = useMemo(() => races?.filter((race) => isRaceUpcoming(race.date)), [races]);
 const pastRaces = useMemo(() => races?.filter((race) => !isRaceUpcoming(race.date)), [races]);
 const nextRace = useMemo(() => restRaces?.[0], [restRaces]);
 const upcomingRaces = useMemo(() => restRaces?.slice(1), [restRaces])

 //Buscar si coincide el round en sprints para saber si hay sprints o no
 const findRoundSprint = (round) => {
  return sprints?.some(obj => obj.round === round);
 };

 // output: Fri May 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)
 const convertDate = (dateString) => {
  if (!dateString) return null;
  const [year, month, day] = dateString.split('-');
  return new Date(+year, +month - 1, +day);
 };

 //FRI
 const getShortDayOfWeek = (dateString) => {
  const date = convertDate(dateString);
  const dayOfWeek = date?.toLocaleString('en-US', { weekday: 'short' });
  return dayOfWeek?.toUpperCase();
 };

 //20 de mayo 2023
 const getLongDate = (dateString) => {
  const date = convertDate(dateString);
  const longDate = date?.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  return longDate;
 };

 // HH:MM
 const convertTimeZone = (timeString) => {
  // toma una cadena de tiempo en formato "hh:mm:ss"
  if (!timeString) {
   return ['', ''];
  }
  const today = new Date();
  const timeZone = today.getTimezoneOffset() / -60;
  let [hours, minutes, second] = timeString.split(':');
  if ((+hours + timeZone) % 24 < 10) {
   hours = '0' + (+hours + timeZone) % 24;
  } else {
   hours = +hours + timeZone;
  }
  return `${hours}:${minutes}`;
 };


 return { nextRace, getLongDate, getShortDayOfWeek, convertTimeZone, upcomingRaces, pastRaces, findRoundSprint }
}
