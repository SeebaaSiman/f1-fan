import styled from "styled-components";
import { TwitterTimeLine } from "../components/TwitterTimeLine";
import { useState } from "react";
import { getButtonText, options } from "../components/newsData";

export const News = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Cuando se hace clic en un botón de opción, se verifica si la opción ya está en el arreglo selectedOptions. Si es así, se filtra esa opción del arreglo para desactivarla. Si no está en el arreglo, se agrega a selectedOptions para activarla.
  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <>
      <ContainerTwitt>
        {options.map((option, index) => (
          <ButtonOptions
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedOptions.includes(option) ? "active" : ""}
          >
            {getButtonText(option)}
          </ButtonOptions>
        ))}
      </ContainerTwitt>
      <ContainerTwitt>
        {selectedOptions.map((selectedOption) => (
          <TwitterTimeLine screenName={selectedOption} key={selectedOption} />
        ))}
      </ContainerTwitt>
    </>
  );
};
const ContainerNews = styled.div``;
const ContainerTwitt = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonOptions = styled.button`
  color: black;
  background-color: grey;
  border-radius: 25px;
  margin: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
  &.active {
    color: white;
    background-color: black;
  }
`;
