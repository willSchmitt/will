import { Wrapper } from "@/components/Wrapper";
import { InvestimentContainer, SubscribeButton, Values } from "./styles";
import { ButtonSalesModule } from "@/components/ButtonSalesModule";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const values = [
  {
    id: "1",
    title: "Apenas 12x de",
    value: "R$ 38,68",
    inCash: "ou R$ 397,00 à vista",
  },
  {
    id: "2",
    title: "Apenas 12x de",
    value: "R$ 30,00",
    inCash: "ou R$ 297,00 à vista",
  },
  {
    id: "3",
    title: "Apenas 12x de",
    value: "R$ 20,00",
    inCash: "ou R$ 197,00 à vista",
  },
];

export function Investiment() {
  return (
    <InvestimentContainer>
      <Wrapper>
        <h2>Investimento</h2>

        <Carousel
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          className="carousel"
        >
          {values.map((item) => (
            <Values key={item.id} className="teste">
              <small>{item.title}</small>
              <strong>{item.value}</strong>
              <span>{item.inCash}</span>
            </Values>
          ))}
        </Carousel>
        <SubscribeButton>
          <ButtonSalesModule />
          <Image
            src="/images/imagesSalesModule/paymentsSales.png"
            alt="Métodos de pagamento"
            width={256}
            height={26}
          />
        </SubscribeButton>
        <footer>
          <p>
            Se você não gostar do curso, seja qual for o motivo, é só avisar em
            até <strong>7 dias</strong> que eu devolvemos o seu dinheiro. Sem
            enrolação.
          </p>
        </footer>
      </Wrapper>
    </InvestimentContainer>
  );
}
