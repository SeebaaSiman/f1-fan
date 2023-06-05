import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BoxStyle, device } from "../../Layout/StylesGlobal";
export const BgColor = {
  "Alfa Romeo": "linear-gradient(125deg, #8b0200 60%, #250100 100%)",
  AlphaTauri: "linear-gradient(125deg, #121f2b 60%, #080d13 100%)",
  "Alpine F1 Team": "linear-gradient(125deg, #ff5da1 40%, #050097 100%)",
  "Aston Martin": "linear-gradient(125deg, #029284 0%, #00574e 100%)",
  Ferrari: "linear-gradient(125deg, #ff0000 60%, #830200 100%)",
  "Haas F1 Team": "linear-gradient(125deg, #4d4d4d 60%, #272727 100%)",
  McLaren: "linear-gradient(125deg, #fd6600 60%, #aa4400 100%)",
  Mercedes: "linear-gradient(125deg, #00fffe 60%, #007c7c 100%)",
  "Red Bull": "linear-gradient(125deg, #0800ff 40%, #02003d 90%)",
  Williams: "linear-gradient(125deg, #ffffff 60%, #969696 100%)",
};
export const CardContainer = styled.div`
  width: 94%;
  margin: 1rem auto 1rem auto;
  border-radius: 20px;
  box-shadow: ${BoxStyle.boxShadow};
  background: ${(props) => props.BgColor[props.variant] || ""};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.md} {
    width: 48%;
    margin: 2.2rem auto 2rem auto;
  }
  @media ${device.xl} {
    width: 32%;
    margin: 3.3rem auto 2rem auto;

  }
`;
export const HeaderContainer = styled(NavLink)`
    text-decoration: none;
color:black;
  padding: 1rem;
  display: flex;
  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    align-self: center;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
  h1,
  h2 {
    align-self: center;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
  h2 {
    margin-right: 6px;
    font-weight: normal;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
`;
export const Divider = styled.div`
  width: 10px;
  background: transparent;
  border-radius: 80px;
  box-shadow: ${BoxStyle.boxShadow};
  margin: 0 5px 0 5px;
`;
export const MainContainer = styled.div`
  padding: 1rem;
  h5 {
    margin-bottom: 4px;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
`;

export const FooterContainer = styled.div`
margin-top: 1.5rem;
  padding: 2rem;
  position:relative;
  ${({ variant }) =>
    variant === 'car' &&
    `
    margin-top:0rem;
    @media ${device.md} {
      margin-top:0rem;
  }
    @media ${device.xl} {
      margin-top:0rem;
  }
  `}
  h1,
  h2,
  h3 {
    margin-bottom: 4px;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }

  img {
    position: absolute;
    bottom: 0%;
    left:50%;
    object-fit: contain;
    width: 40%;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.8));
    @media ${device.md} {
    width: 50%;
    left:55%;
  }
  @media ${device.xl} {
    margin-top: 2.2rem;
    width: 55%;
  }
  ${({ variant }) =>
    variant === 'car' &&
    `
    top: 10%;
    left:42%;
    width: 60%;
    @media ${device.md} {
      left:53%;
    }
    @media ${device.xl} {
      top: -8%;
    left:48%;
    }
  `}
  }
`;
