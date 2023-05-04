import { Outlet } from "react-router-dom";
import { StylesGlobal } from "./StylesGlobal";
import { NavBar } from "../components/navigation-bar/NavBar";
import { Modal } from "../components/modal-main/Modal";
import { useLayoutApp } from "./useLayoutApp";

export const Layout = () => {
  const { isLoading, handleLoading, handleLoad } = useLayoutApp();
  return (
    <>
      <StylesGlobal />
      <NavBar handleLoading={handleLoading} />
      <main onAnimationEnd={handleLoad}>
        {isLoading && <Modal />}
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

// <Outlet /> para renderizar los children de las rutas anidadadas
/* background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); */
