import styled from "styled-components";
import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

export const AccordionCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <CardWrapper>
      <CardHeader onClick={toggleOpen}>
        <CardTitle open={open}>{title}</CardTitle>
        <CardArrow open={open}>
          {open ? <Unicons.UilAngleUp /> : <Unicons.UilAngleDown />}
        </CardArrow>
      </CardHeader>
      <CardContent open={open}>{children}</CardContent>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CardTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  visibility: ${({ open }) => (open ? "hidden" : "")};
`;

const CardArrow = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
`;

const CardContent = styled.div`
  margin-top: 1rem;
  overflow: hidden;
  height: ${({ open }) => (open ? "auto" : "0")};
  transition: height 1s ease-in-out;
`;
