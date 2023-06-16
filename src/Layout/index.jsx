import { Outlet, useNavigation } from "react-router-dom";
import { StylesGlobal } from "./StylesGlobal";
import { NavBar, Modal, Loader, Loader2 } from "../components";
import { useLayoutApp } from "./useLayoutApp";
import styled from "styled-components";

export const Layout = () => {
  const { isLoading, onLoading, onLoad } = useLayoutApp();
  const Navigation = useNavigation();
  return (
    <>
      <StylesGlobal />
      <NavBar onLoading={onLoading} />
      <>
        <MainContainer onAnimationEnd={onLoad}>
          <Modal isLoading={isLoading} />
          {Navigation.state === "loading" && <Loader />}
          <Outlet />
        </MainContainer>
      </>
      <footer></footer>
    </>
  );
};
const MainContainer = styled.main`
  position: relative;
`;
