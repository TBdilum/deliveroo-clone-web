import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh", // Ensure full viewport height
        overflow: "visible",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
