import { useEffect, useState } from "react";

const useDeviceType = () => {
 const [deviceType, setDeviceType] = useState("");

 useEffect(() => {
  const handleResize = () => {
   const { userAgent } = navigator;
   let type = "";

   if (/iPad/.test(userAgent) || /Tablet/.test(userAgent)) {
    type = "tablet";
   } else if (/Mobile/.test(userAgent)) {
    type = "mobile";
   } else {
    type = "desktop";
   }

   setDeviceType(type);
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 return deviceType;
};

export default useDeviceType;
