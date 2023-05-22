export const options = [
 "F1",
 "fia",
 "MercedesAMGF1",
 "ScuderiaFerrari",
 "redbullracing",
 "McLarenF1",
 "AstonMartinF1",
 "HaasF1Team",
 "AlphaTauriF1",
 "AlpineF1Team",
 "WilliamsRacing",
 "alfaromeostake",
];

export const getButtonText = (name) => {
 if (name === "MercedesAMGF1") {
  return "Mercedes";
 } else if (name === "ScuderiaFerrari") {
  return "Ferrari";
 } else if (name === "fia") {
  return "Fia";
 } else if (name === "redbullracing") {
  return "Red Bull";
 } else if (name === "McLarenF1") {
  return "McLaren";
 } else if (name === "AstonMartinF1") {
  return "Aston Martin";
 } else if (name === "HaasF1Team") {
  return "Haas";
 } else if (name === "AlphaTauriF1") {
  return "Alpha Tauri";
 } else if (name === "AlpineF1Team") {
  return "Alpine";
 } else if (name === "WilliamsRacing") {
  return "Williams";
 } else if (name === "alfaromeostake") {
  return "Alfa Romeo";
 } else {
  return name;
 }
};