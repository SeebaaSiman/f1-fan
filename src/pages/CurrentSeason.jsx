import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const CurrentSeason = () => {
  return (
    <CurrentContainer>
      <BannerContainer>
        <NavLink to="Drivers">
          <span>Drivers</span>
        </NavLink>
        <NavLink to="Teams">
          <span>Teams</span>
        </NavLink>
      </BannerContainer>
      <Outlet />
    </CurrentContainer>
  );
};
const CurrentContainer = styled.div`
  width: 100%;
  height: auto;
`;
const BannerContainer = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  span {
    font-size: 2.5rem;
    color: #fff;
    text-decoration: none;
  }
`;
