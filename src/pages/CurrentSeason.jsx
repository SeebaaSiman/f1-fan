import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../components/modal-main/Modal";
import { useLayoutApp } from "../Layout/useLayoutApp";

export const CurrentSeason = () => {
  const { isLoading, handleLoading, handleLoad } = useLayoutApp();

  return (
    <CurrentContainer>
      <BannerContainer>
        <NavLink to="Drivers" onClick={handleLoading}>
          <span>Drivers</span>
        </NavLink>
        <NavLink to="Teams" onClick={handleLoading}>
          <span>Teams</span>
        </NavLink>
      </BannerContainer>
      <main onAnimationEnd={handleLoad}>
        {isLoading && <Modal />}
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
  text-decoration: none;
  span {
    font-size: 2.5rem;
    color: #fff;
    text-decoration: none;
  }
`;
