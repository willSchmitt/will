import { Wrapper } from "@/components/Wrapper";
import {
  BoxDetails,
  Detail,
  DetailsContainer,
  HeaderDetails,
  Line,
  TextImageFooter,
} from "./styles";
import { ButtonPerpetuo } from "@/components/ButtonPerpetuo";
import Image from "next/image";
import { CarouselComponent } from "@/components/ Carousel";

export function Details() {
  return (
    <DetailsContainer>
      <Wrapper>
        <HeaderDetails>
          <strong>
            Clique no botão abaixo e dê o primeiro passo para de uma vez por
            todas
          </strong>
          <p>
            conseguir fixar o que aprende na faculdade de medicina e passar na
            frente dos demais estudantes de medicina
          </p>
          <span>
            que estão no mesmo semestre do que você (mais ou menos uns 50 mil).
          </span>
          <ButtonPerpetuo />
        </HeaderDetails>

        <BoxDetails>
          <Detail>
            <Image
              src="/images/iconsPerpetuo/dolar.png"
              alt="Imagem do icone dólar com um check"
              width={60}
              height={60}
            />

            <small>Garantia de 15 dias</small>
          </Detail>

          <Line />

          <Detail>
            <Image
              src="/images/iconsPerpetuo/phone.png"
              alt="Imagem do icone celular"
              width={35}
              height={60}
            />

            <small>Acesso imediato</small>
          </Detail>
          <Line />
          <Detail>
            <Image
              src="/images/iconsPerpetuo/shield.png"
              alt="Imagem de um escudo"
              width={46}
              height={60}
            />

            <small>Compra segura</small>
          </Detail>
          <Line />
          <Detail>
            <Image
              src="/images/iconsPerpetuo/group.png"
              alt="Imagem de um grupo de estudos"
              width={81}
              height={50}
            />

            <small>+17.000 alunos</small>
          </Detail>
          <Line />
          <Detail>
            <Image
              src="/images/iconsPerpetuo/message.png"
              alt="Imagem de icone de chat com check"
              width={60}
              height={56}
            />

            <small>Suporte personalizado 24/7</small>
          </Detail>
        </BoxDetails>

        <CarouselComponent />

        <footer>
          <h3>
            É uma plataforma de estudos para estudantes de medicina fixarem o
            conteúdo
          </h3>

          <TextImageFooter>
            <Image
              src="/images/imagesPerpetuo/brain.png"
              alt="imagem de um cérebro"
              width={71}
              height={71}
            />
            <small>
              e atingirem notas +90% nas provas e, geralmente é isso que
              acontece.
            </small>
          </TextImageFooter>

          <picture>
            <Image
              src="/images/iconsPerpetuo/checkedIcon.png"
              alt="imagem de um checked"
              width={45}
              height={45}
            />
          </picture>
        </footer>
      </Wrapper>
    </DetailsContainer>
  );
}
