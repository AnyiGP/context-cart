import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Aside } from "./Aside";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <Aside />
      <section>
        <Outlet />
      </section>

      <Footer />
    </>
  );
};
