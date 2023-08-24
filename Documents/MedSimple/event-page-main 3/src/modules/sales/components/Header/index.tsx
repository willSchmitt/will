import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Numbers } from "./Numbers";
import { SalesContainer } from "./styles";
import dynamic from "next/dynamic";
import { useSalesPage } from "../../contexts/SalesPageContext";

const Countdown = dynamic(() => import("./Countdown"), { ssr: false });

export function Header() {
  const { pageData } = useSalesPage()

  return (
    <SalesContainer>
      <Nav />
      <Hero />
      {pageData.isEnabled && <Countdown />}
      <Numbers />
    </SalesContainer>
  );
}
