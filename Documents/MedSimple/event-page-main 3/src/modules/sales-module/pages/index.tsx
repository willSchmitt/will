import { AboutPerpetuo } from "@/modules/perpertuo/components/About";
import { AboutSalesModule } from "../components/About";
import { Contents } from "../components/Contents";
import { HeaderSalesModule } from "../components/Header";
import { HeaderSalesModuleContainer } from "./styles";
import { Current } from "../components/Current";
import { Investiment } from "../components/Investment";
import { InstructorSalesModule } from "../components/InstructorSalesModule";
import Footer from "@/modules/sales/components/Footer";

export function SalesModule() {
  return (
      <HeaderSalesModuleContainer>
        <HeaderSalesModule />
        <AboutSalesModule />
        <Contents />
        <AboutPerpetuo />
        <Current />
        <Investiment />
        <InstructorSalesModule />
        <Footer />
      </HeaderSalesModuleContainer>
  );
}
