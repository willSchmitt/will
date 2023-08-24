import { Wrapper } from "@/components/Wrapper";
import { Container, InfoContainer, VideoContainer } from "./styles";
import Image from "next/image";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useSalesPage } from "@/modules/sales/contexts/SalesPageContext";

export function Hero() {
  const { pageData } = useSalesPage();

  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <h1>Aprenda e fixe 3x mais os conteúdos da faculdade de medicina</h1>
          
          <span>
            <Image
              src="/icons/documentCheck.png"
              alt="Imagem de um caderno com check"
              width={40}
              height={40}
            />
            Garanta mais de 90% de acerto nas questões das provas.
          </span>

          <Link href="#planos" scroll={false}>
            <Button>Garantir minha vaga</Button>
          </Link>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}
