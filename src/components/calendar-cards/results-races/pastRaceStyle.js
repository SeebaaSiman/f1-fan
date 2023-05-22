import styled from "styled-components";
import { device } from "../../../Layout/StylesGlobal";
import { TeamCar } from "../../current-season/dataImage";

export const PastRaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 1.5rem;
  background: ${(props) => (props.hbg ? props.BgColor[props.variant] : "")};

  // Para usar un background-image y background-color hay que usar background con sus propiedades
  @media ${device.xl} {
   min-height: 3rem;
  background: ${(props) =>
  props.hbg
   ? `url(${TeamCar[props.variant]}) no-repeat left / contain, ${props.BgColor[props.variant]}`
   : ""};
}

  `;
export const HelmetContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 1rem;
    height: 1rem;
  }
`;
export const Mobile = styled.div`
  display: flex;
  flex-grow: ${(props) => (props.ss ? 3 : 0)};
  width: calc(100% / 4);
  align-items: left;
`;
export const Tablet = styled.div`
  display: flex;
  flex-grow: ${(props) => (props.ss ? 2 : 1)};

  width: calc(100% / 6);
  align-items: center;
  display: none;
  @media ${device.md} {
    display: block;
  }
`;
export const Desktop = styled.div`
  width: calc(100% / 8);
  display: flex;
  flex-grow: ${(props) => (props.ss ? 2 : 1)};

  align-items: center;
  display: none;
  @media ${device.lg} {
    display: block;
  }
`;
