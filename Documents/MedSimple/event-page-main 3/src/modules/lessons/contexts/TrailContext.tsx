import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export enum TrailEnum {
  BASIC = "ciclo-basico",
  CLINICAL = "ciclo-clinico",
  BOARDING = "internato",
}

export type TrailContextProps = {
  trail: TrailEnum | null;
  trailTitle: string;
  changeTrail: (trail: TrailEnum) => void;
};

type TrailProviderProps = {
  children: React.ReactNode;
};

export const TrailContext = createContext({} as TrailContextProps);

export const TrailProvider = ({ children }: TrailProviderProps) => {
  const [trail, setTrail] = useState<TrailEnum | null>(TrailEnum.BASIC);

  const trailTitle = useMemo(() => {
    switch (trail) {
      case TrailEnum.BASIC:
        return "Ciclo Básico";
      case TrailEnum.CLINICAL:
        return "Ciclo Clínico";
      case TrailEnum.BOARDING:
        return "Internato";
      default:
        return "";
    }
  }, [trail]);

  const changeTrail = (selectedTrail: TrailEnum) => {
    setTrail(selectedTrail);

    setCookie(null, "trail", selectedTrail, {
      maxAge: 10 * 24 * 60 * 60, // 10 days
      path: "/",
    });
  };

  useEffect(() => {
    const cookies = parseCookies();

    if (cookies.trail) {
      if (
        !["ciclo-basico", "ciclo-clinico", "internato"].includes(cookies.trail)
      ) {
        setTrail(null);
        return;
      }

      setTrail(cookies.trail as TrailEnum);
    }
  }, []);

  return (
    <TrailContext.Provider value={{ trail, trailTitle, changeTrail }}>
      {children}
    </TrailContext.Provider>
  );
};

export const useTrail = () => {
  const context = useContext(TrailContext);

  if (!context) {
    throw new Error("Trail Context not found");
  }

  return context;
};
