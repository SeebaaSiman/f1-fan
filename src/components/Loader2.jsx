import wheel from "@/assets/loaders/wheel2.gif";
import styled from "styled-components";

export const Loader2 = () => {
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
