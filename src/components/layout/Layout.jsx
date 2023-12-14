import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Aside } from "./Aside";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main />
        <Aside />
    
      <Footer />
    </>
  );
};
