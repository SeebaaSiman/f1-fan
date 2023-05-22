import { Outlet, useNavigation } from "react-router-dom";
import { StylesGlobal } from "./StylesGlobal";
import { NavBar } from "../components/navigation-bar/NavBar";
import { Modal } from "../components/modal-main/Modal";
import { useLayoutApp } from "./useLayoutApp";
import { Loader } from "../components/Loader";

export const Layout = () => {
  const { isLoading, handleLoading, handleLoad } = useLayoutApp();
  const Navigation = useNavigation();
  return (
    <>
      <StylesGlobal />
      <NavBar handleLoading={handleLoading} />
      <main onAnimationEnd={handleLoad}>
        {isLoading && <Modal />}
        {Navigation.state === "loading" ? <Loader /> : <Outlet />}
      </main>
      <footer></footer>
    </>
  );
};

// <Outlet /> para renderizar los children de las rutas anidadadas
/* background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); */
