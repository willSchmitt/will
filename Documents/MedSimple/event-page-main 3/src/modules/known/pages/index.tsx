import { getSalesPageUseCase } from "@/useCases/pages/GetSalesPage";
import { getTestimonialsListUseCase } from "@/useCases/testimonials/GetTestimonialsList";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { About } from "@/modules/sales/components/About";
import { Benefits } from "@/modules/sales/components/Benefits";
import { Faq } from "@/modules/sales/components/Faq";
import { Header } from "../components/Header";
import { Instructors } from "@/modules/sales/components/Instructors";
import { Plans } from "../components/Plans";
import { Testimony } from "@/modules/sales/components/Testimony";
import { SalesPageContext } from "@/modules/sales/contexts/SalesPageContext";
import dynamic from "next/dynamic";
import { Whatsapp } from "@/modules/sales/components/Whatsapp";
import { OgImage } from "@/components/OgImage";
import { useRouter } from "next/router";

type Props = {
  pageData: string;
  testimonials: string;
};

const Footer = dynamic(() => import("@/modules/sales/components/Footer"), {
  ssr: false,
});

export const KnownPage = ({ pageData, testimonials }: Props) => {
  const router = useRouter();
  const title = "Garanta mais de 90% de acerto nas questões das provas";

  return (
    <SalesPageContext.Provider
      value={{
        pageData: JSON.parse(pageData),
        testimonials: JSON.parse(testimonials),
      }}
    >
      <Head>
        <title>{title} | Plataforma MEDsimple</title>

        <OgImage
          title={title}
          description="Para você do Ciclo Básico, Ciclo Clínico e Internato ou de qualquer método de ensino (tradicional, PBL ou misto), seja de faculdade pública ou particular."
          imageUrl={`${process.env.NEXT_PUBLIC_APP_URL}/images/og-sales.png`}
          pageUrl={router.pathname}
        />
      </Head>

      <Header />
      <About />
      <Instructors />
      <Benefits />
      <Testimony />
      <Plans />
      <Faq />
      <Footer />

      <Whatsapp />
    </SalesPageContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const pageData = await getSalesPageUseCase();
  const testimonials = await getTestimonialsListUseCase();

  return {
    props: {
      pageData: JSON.stringify(pageData),
      testimonials: JSON.stringify(testimonials),
    },
  };
};
