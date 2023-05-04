import styled, { keyframes } from "styled-components";
import bg from "../../assets/modal.jpg";
const sweep = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;
  animation: ${sweep} 1s ease-out forwards;
`;
export const Modal = () => {
  return <ModalContainer bg={bg} />;
};
