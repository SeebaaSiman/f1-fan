import { useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

//! Algún diseño con un video en loop de fondo de f1
