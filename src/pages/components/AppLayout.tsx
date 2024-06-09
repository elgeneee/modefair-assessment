"use client";

// import { cn } from "@/utils/cn";
import { clsx } from "clsx";
import React, { useState } from "react";
import { Footer } from "./Footer";
import { Banner } from "./Banner";

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  );
};
