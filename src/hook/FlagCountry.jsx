import styled from "styled-components";
import useAxios from "./useAxios";
import { BoxStyle } from "../Layout/StylesGlobal";

export const FlagCountry = ({ countryName, size = "30", heading = 3 }) => {
  const { data } = useAxios(`https://flagcdn.com/en/codes.json`);
  const countryCodes = data;
  console.log(countryCodes);
  const HeadingTag = `h${heading}`;
  function getCountryCode(countryName) {
    // Busca el código del país en el objeto countryCodes
    for (const code in countryCodes) {
      if (countryCodes[code] === countryName) {
        return code;
      } else if (countryName === "USA") {
        return "us";
      } else if (countryName === "UK") {
        return "gb";
      } else if (countryName === "UAE") {
        return "ae";
      }
    }
    return null;
  }

  return (
    <FlagContainer>
      <img
        src={`https://flagcdn.com/${getCountryCode(countryName)}.svg`}
        width={size}
        alt={countryName}
      />
      <HeadingTag>{countryName}</HeadingTag>
    </FlagContainer>
  );
};

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 25px;

  img {
    height: 100%;
    margin-right: 8px;
    box-shadow: ${BoxStyle.boxShadow};
  }
`;
