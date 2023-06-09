import styled from "styled-components";
import { AccordionCard } from "./AccordionCard";
import { useCalendar } from "../../hook/useCalendar";
import { BoxStyle } from "../../Layout/StylesGlobal";
import { FlagCountry } from "../../hook/FlagCountry";
export const FixtureCard = ({
  circuit,
  round,
  location,
  children,
  date,
  title,
}) => {
  const { getLongDate } = useCalendar();
  return (
    <NextContainer>
      <HeaderContainer>
        <FlagCountry countryName={location} />
        <h4>Round {round}</h4>
      </HeaderContainer>
      <MiddleContainer>
        <h2>{circuit}</h2>
        <DateContainer>{getLongDate(date)}</DateContainer>
      </MiddleContainer>
      <AccordionCard title={title}>{children}</AccordionCard>
    </NextContainer>
  );
};
const NextContainer = styled.div`
  background-color: white;
  box-shadow: ${BoxStyle.boxShadow};
  width: 90%;
  border-radius: 20px;
  margin: 1rem;
  h3 h4 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
`;
const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const DateContainer = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;
