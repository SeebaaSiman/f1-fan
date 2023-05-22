import { BoxStyle, device } from "../../Layout/StylesGlobal";
import styled, { keyframes } from "styled-components";

export const NavBarContainer = styled.nav`
  /* position: relative; */
  width: 100%;
  height: 5rem;
  background-color: red;
  display: inline-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Logo = styled.img`
  height: 4.6rem;
  filter: drop-shadow(3px 3px 3px #222);
`;
const show = keyframes`
0% {
  display: inline;
    opacity: 0;
transform:scale(0.2)
}
100% {
  opacity: 1;
  transform:scale(1)
  }
`;
export const LinksContainer = styled.div`
  //!First mobile, con el menú
  position: absolute;
  top: -700px;
  left: -2000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .link {
    //
    filter: drop-shadow(3px 3px 3px #222);
    text-decoration: none;
    flex: 1;
    color: #222;
    font-size: 1.5rem;
    display: block;
    z-index: 10;
  }

  & .active {
    color: #e2dfdd;
  }

  &.open-menu {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 10;
    .link {
      font-size: 2.5rem;
      color: #222;
      margin-top: 3rem;
      &:hover{
        color:red;
      }
    }
  }
  //! Desktop
  @media ${device.md} {
    position: initial;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    width: 100%;
    height: 100%;
    .text {
      display: none;
      transform: translateX(-20px);
    }
    & .active .text {
      display: inline;
      text-decoration: underline;
      animation: ${show} 1s ease-in-out;
    }
  }
`;

//! mobile
export const Menu = styled.div`
  @media ${device.md} {
    display: none;
  }
`;
export const BgMenu = styled.div`
  background-color: #e2dfdd;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  box-shadow: 1px 2px 3px black;
  z-index: -1;
  transition: all 0.6s ease;
  box-shadow: ${BoxStyle.boxShadow};
  &.open-menu {
    border-radius: 0 0 20% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;
