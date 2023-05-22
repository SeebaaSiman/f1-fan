import wheel from "@/assets/loaders/wheel.gif";
import styled from "styled-components";

export const Loader = () => {
  return (
    <LoaderContainer>
      <img src={wheel} />
    </LoaderContainer>
  );
};
const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
