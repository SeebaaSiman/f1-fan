import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";
import { Modal } from "@/components";
import { useLayoutApp } from "@/Layout/useLayoutApp";
import useDeviceType from "../hook/useDeviceType";

export const CurrentSeason = () => {
  const { isLoading, onLoading, onLoad } = useLayoutApp();
  const deviceType = useDeviceType();
  const IconSize = deviceType === "desktop" ? "2.8rem" : "2rem";
  return (
    <CurrentContainer>
      <BannerContainer>
        <StyledNavLink to="Drivers" onClick={onLoading}>
          <IconDriver size={IconSize} />
          <span>Drivers</span>
        </StyledNavLink>
        <StyledNavLink to="Teams" onClick={onLoading}>
          <IconTeams size={IconSize} />
          <span>Teams</span>
        </StyledNavLink>
      </BannerContainer>

      <main onAnimationEnd={onLoad}>
        <Modal isLoading={isLoading} />
        <Outlet />
      </main>
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
  border-radius: 0 0 30px 30px;
  padding: 5px;
`;
const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  span {
    font-size: ${(props) =>
      props.deviceType === "desktop" ? "2.5rem" : "2rem"};
    color: #7e7e7e;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  &.active span {
    color: red;
  }
`;
const IconDriver = styled(Unicons.UilStreering)`
  color: #7e7e7e;
  font-size: 3rem;
  transition: color 0.3s;
  ${StyledNavLink}:hover & {
    color: white;
  }
  ${StyledNavLink}.active & {
    color: red;
  }
`;
const IconTeams = styled(Unicons.UilPump)`
  color: #7e7e7e;
  font-size: 3rem;
  transition: color 0.3s;
  ${StyledNavLink}:hover & {
    color: white;
  }
  ${StyledNavLink}.active & {
    color: red;
  }
`;
