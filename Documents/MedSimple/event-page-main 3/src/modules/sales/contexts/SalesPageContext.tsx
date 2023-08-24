import { SalesPage } from "@/entities/domains/sales-page";
import { Testimonial } from "@/entities/domains/testimonial";
import { createContext, useContext, useState } from "react";

type SalesPageContextProps = {
  pageData: SalesPage;
  testimonials: Testimonial[];
};

export const SalesPageContext = createContext({} as SalesPageContextProps);

export const useSalesPage = () => {
  const context = useContext(SalesPageContext);

  if (!context) {
    throw new Error("Sales page context not found.");
  }

  return context;
};
