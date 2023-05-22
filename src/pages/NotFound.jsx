import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import wheel from "@/assets/loaders/wheel.gif";
export const NotFound = () => {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
    </ErrorContainer>
  );
};
const ErrorContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: url(${wheel});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  p {
    margin: 6rem;
    filter: drop-shadow(3px 3px 3px #222);
  }
`;
