import { createGlobalStyle } from "styled-components";
// import { Poppins } from "google-fonts";
export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
export const StylesGlobal = createGlobalStyle`
  /* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Inconsolata', monospace; */
/* } */
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* cursor: none; */
    /* user-select:none; */
    /* overflow-x: hidden; */
    scroll-behavior: smooth;
}
html{
    background-color: #e2dfdd;
    color: #000;
    font-family: "Oxygen" ,'Bebas Neue',sans-serif;
}
::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`
//  #b3ff00