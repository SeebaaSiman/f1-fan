import { useState } from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);
  const handleConfirmIconClick = () => {
    // Aquí puedes hacer algo con el valor ingresado en el input, por ejemplo, realizar una búsqueda
  };
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <Container isOpen={isOpen}>
      {isOpen ? (
        <>
          <Input
            isOpen={isOpen}
            placeholder="Search..."
            type="text"
            value={searchValue}
            onChange={handleInputChange}
          />
          <IconClouse onClick={toggleOpen} />
        </>
      ) : (
        <IconSearch onClick={toggleOpen} />
      )}
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ isOpen }) => (isOpen ? "450px" : "70px")};
  height: ${({ isOpen }) => (isOpen ? "80px" : "70px")};
  background-color: ${({ isOpen }) => (isOpen ? "#a7a7a7" : "#333")};
  border-radius: ${({ isOpen }) => (isOpen ? "5%" : "50%")};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;
  cursor: pointer;
`;
const Input = styled.input`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  /* margin-left: 16px; */
  font-size: 3rem;
  outline: none;
  caret-color: #3c7cc5;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  width: 85%;
  height: 3.5rem;
  border-style: none;
  background-color: transparent;
  border-bottom: 3px solid #3c7cc5;
`;
const IconClouse = styled(Unicons.UilTimesCircle)`
  height: 40px;
  width: 40px;
  color: #fff;
  &:hover {
    color: #3c7cc5;
    transform: scale(1.2);
  }
`;
const IconSearch = styled(Unicons.UilSearchAlt)`
  height: 40px;
  width: 40px;
  color: #fff;
  &:hover {
    color: #3c7cc5;
    transform: scale(1.2);
  }
`;
