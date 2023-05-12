import styled from "styled-components";
import { BoxStyle } from "../../Layout/StylesGlobal";
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
  width: 90%;
  margin: 1rem auto 1rem auto;
  border-radius: 20px;
  box-shadow: ${BoxStyle.boxShadow};

  background: ${(props) => props.BgColor[props.variant] || ""};
  display: flex;
  justify-content: space-around;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;
export const RightContainer = styled.div`
  width: 50%;
  img {
    margin-top: 1rem;
    object-fit: cover;
    width: 100%;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.8));
  }
`;
export const HeaderContainer = styled.div`
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
  background: inherit;
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
  padding: 2rem;
  h1,
  h2,
  h3 {
    margin-bottom: 4px;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.4));
  }
`;
