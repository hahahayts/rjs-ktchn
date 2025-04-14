import { childrenType } from "@/types";
import React from "react";
import { Header, HeaderLogo } from "../_components/header";
import { NavBar } from "../_components/nav-bar";

const layout = ({ children }: childrenType) => {
  return (
    <div>
      <Header>
        <HeaderLogo />
        <NavBar />
      </Header>
      {children}
    </div>
  );
};

export default layout;
