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
      {/* Provider modal ? */}{" "}
      <>
        <MainContainer onAnimationEnd={onLoad}>
          {/* {isLoading && <Modal />} */}
          <Modal isLoading={isLoading} />
          {Navigation.state === "loading" && <Loader />}
          {/* {Navigation.state === "idle" && <Loader2 />} */}
          {/* {Navigation.state === "submitting" && <Outlet />} */}
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
// <Outlet /> para renderizar los children de las rutas anidadadas
/* background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); */
