import React from "react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StyledInnerWrap } from "./styles";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <StyledInnerWrap>
        <ThemeToggle />
      </StyledInnerWrap>
    </header>
  );
};

export { Header };
