import { Wrapper } from "@/components/Wrapper";
import { Box, Boxs, ContentsContainer } from "./styles";
import Image from "next/image";
import { ButtonSalesModule } from "@/components/ButtonSalesModule";

const content = [
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
  {
    title: "Lorem Ipsum has been the industrys standard",
    image: "/images/imagesSalesModule/iconSalesContent.png",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever sincethe 1500s.",
  },
];

export function Contents() {
  return (
    <ContentsContainer>
      <Wrapper>
        <h2>O que você vai aprender com esse curso:</h2>
        <Boxs>
          {content.map((question) => (
            <>
              <Box>
                <header>
                  <picture>
                    <Image src={question.image} alt="" width={20} height={20} />
                  </picture>
                  <small>{question.title}</small>
                </header>
                <section>
                  <p>{question.description}</p>
                </section>
              </Box>
            </>
          ))}
        </Boxs>
        <ButtonSalesModule />
      </Wrapper>
    </ContentsContainer>
  );
}
