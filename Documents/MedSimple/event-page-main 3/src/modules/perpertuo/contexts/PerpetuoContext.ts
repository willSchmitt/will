import { Perpetuo } from "@/entities/domains/perpetuo";
import { createContext, useContext } from "react";

type PerpetuoContextProps = {
  pageData: Perpetuo;
};

export const PerpetuoContext = createContext({} as PerpetuoContextProps);

export const usePerpetuo = () => {
  const context = useContext(PerpetuoContext);

  if (!context) {
    throw new Error("Contexto não encontrado.");
  }

  return context;
};
