import React from "react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { InnerWrap } from "./styles";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <InnerWrap>
        <ThemeToggle />
      </InnerWrap>
    </header>
  );
};

export { Header };
