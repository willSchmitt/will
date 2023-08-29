import { AboutPerpetuo } from "../components/About";
import { Details } from "../components/Details";
import { HeaderPerpetuo } from "../components/Header";
import { InstructorsPerpetuo } from "../components/InstructorsPerpetuo";
import { MethodsPerpetuo } from "../components/MethodsPerpetuo";
import { Students } from "../components/Students";
import { Support } from "../components/Support";
import { PlansPerpetuo } from "../components/PlansPerpetuo";
import { FaqPerpetuo } from "../components/FaqPerpetuo";
import Footer from "@/modules/sales/components/Footer";

import { PerpertuoPageContainer } from "./styles";
import { GetServerSideProps } from "next";
import { getPerpetuoUseCase } from "@/useCases/pages/GetPerpetuo";
import { PerpetuoContext } from "../contexts/PerpetuoContext";

type Props = {
  pageData: string;
};

export const PerpertuoPage = ({ pageData }: Props) => {
  return (
    <PerpetuoContext.Provider value={{ pageData: JSON.parse(pageData) }}>
      <PerpertuoPageContainer>
        <HeaderPerpetuo />
        <Details />
        <AboutPerpetuo />
        <Support />
        <InstructorsPerpetuo />
        <Students />
        <MethodsPerpetuo />
        <PlansPerpetuo />
        <FaqPerpetuo />
        <Footer />
      </PerpertuoPageContainer>
    </PerpetuoContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageData = await getPerpetuoUseCase();
  console.log(pageData);

  return {
    props: {
      pageData: JSON.stringify(pageData),
    },
  };
};
