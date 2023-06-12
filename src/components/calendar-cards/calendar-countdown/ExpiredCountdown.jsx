import styled from "styled-components";

export const ExpiredCountdown = () => {
  return <ExpiredContainer>Esperando nueva carrera</ExpiredContainer>;
};
const ExpiredContainer = styled.div`
  margin: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
