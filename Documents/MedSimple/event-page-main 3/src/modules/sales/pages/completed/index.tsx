import { Wrapper } from "@/components/Wrapper";
import { Container, HeaderContainer } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export const SaleCompleted = () => {
  const { query } = useRouter();

  return (
    <Container>
      <Head>
        <title>Compra concluída - Plataforma MEDsimple</title>
      </Head>

      <HeaderContainer>
        <Wrapper>
          <header>
            <Image src="/images/logotipo.png" alt="" width={143} height={40} />
          </header>
        </Wrapper>
      </HeaderContainer>

      <Wrapper>
        <main>
          <h2>Compra concluída</h2>

          <p>Seja bem vindo(a) à plataforma MEDsimple! 🎉🎉</p>
          <p>
            Queremos te ajudar nesse primeiro momento e te passar alguns passo a
            passo para começar a acessar a plataforma.
          </p>

          <ul>
            <li>Clique no botão abaixo: &quot;Acessar a plataforma&quot;</li>
            <li>Configure sua senha</li>
            <li>Faça login na plataforma</li>
            <li>Pronto 🎉</li>
          </ul>

          <a
            href={`https://acesso.medsimpleoficial.com.br/reset-password?token=${query?.transaction}`}
            target="_blank"
          >
            Acessar a plataforma
          </a>

          <span>
            Caso o link não funcionar, aguarde uns minutos e tente novamente.
          </span>
        </main>
      </Wrapper>
    </Container>
  );
};
