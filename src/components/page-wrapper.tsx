"use client";
import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  //Fetch user from the contact
  return <div className="flex  flex-1 flex-col gap-4 md:px-20">{children}</div>;
};

export default PageWrapper;
