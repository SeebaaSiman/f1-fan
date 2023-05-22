import { NavLink, Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../components/modal-main/Modal";
import { useLayoutApp } from "../Layout/useLayoutApp";

export const CurrentSeason = () => {
  const { isLoading, handleLoading, handleLoad } = useLayoutApp();
  const Navigation = useNavigation();
  console.log(Navigation);
  return (
    <CurrentContainer>
      <BannerContainer>
        <StyledNavLink to="Drivers" onClick={handleLoading}>
          <span>Drivers</span>
        </StyledNavLink>

        <StyledNavLink to="Teams" onClick={handleLoading}>
          <span>Teams</span>
        </StyledNavLink>
      </BannerContainer>
      <main onAnimationEnd={handleLoad}>
        {isLoading && <Modal />}
        {Navigation.state === "loading" ? <Loader /> : <Outlet />}
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
  padding: 5px;
`;
const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  span {
    font-size: 2.5rem;
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
