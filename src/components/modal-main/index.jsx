import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
// import bg from "@/assets/loaders/giphy.gif";
import bg from "@/assets/modal.jpg";
import { BoxStyle } from "../../Layout/StylesGlobal";
const sweep = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ModalContainer = styled.div`
  /* position: absolute; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  box-shadow: ${BoxStyle.boxShadow};
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;
  animation: ${sweep} 3s ease-out forwards;
`;
export const Modal = ({ isLoading }) => {
  return (
    <>
      {isLoading &&
        ReactDOM.createPortal(
          <ModalContainer bg={bg} />,
          document.querySelector("#portal")
        )}
    </>
  );
};
