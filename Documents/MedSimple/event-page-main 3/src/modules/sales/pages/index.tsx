import { getSalesPageUseCase } from "@/useCases/pages/GetSalesPage";
import { getTestimonialsListUseCase } from "@/useCases/testimonials/GetTestimonialsList";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { Faq } from "../components/Faq";
import { Header } from "../components/Header";
import { Instructors } from "../components/Instructors";
import { Plans } from "../components/Plans";
import { Testimony } from "../components/Testimony";
import { SalesPageContext } from "../contexts/SalesPageContext";
import dynamic from "next/dynamic";
import { Whatsapp } from "../components/Whatsapp";
import { OgImage } from "@/components/OgImage";
import { useRouter } from "next/router";

type Props = {
  pageData: string;
  testimonials: string;
};

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

export const SalesPage = ({ pageData, testimonials }: Props) => {
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
