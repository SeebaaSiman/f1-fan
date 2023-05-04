import { useEffect, useState } from "react";

export const useNavBar = (handleLoading) => {
 const [clicked, setClicked] = useState(false);
 const [animate, setAnimate] = useState(false);

 const toggleClicked = () => setClicked(!clicked);
 const handleAnimation = () => {
  setAnimate(true);
  setTimeout(() => {
   setAnimate(false);
  }, 1000);
 };

 const handleLinkClick = () => {
  handleAnimation();
  handleLoading()
  if (window.innerWidth < 768 && clicked) {
   setClicked(false);
  }
 };
 useEffect(() => {
  function handleResize() {
   if (window.innerWidth > 768) {
    setClicked(false);
   }
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 return { animate, clicked, handleLinkClick, toggleClicked }
}
