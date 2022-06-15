import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../shared/Navigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
