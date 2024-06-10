"use client";

import React from "react";
import Footer from "./Footer";
import Banner from "./Banner";

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
