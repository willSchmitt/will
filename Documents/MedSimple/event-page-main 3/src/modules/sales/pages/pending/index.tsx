import { Wrapper } from "@/components/Wrapper";
import { Container, HeaderContainer } from "./styles";
import Image from "next/image";
import Head from "next/head";

export const SalePending = () => {
  return (
    <Container>
      <Head>
        <title>Aguardando pagamento - Plataforma MEDsimple</title>
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
          <h2>Quase lá</h2>

          <p>Agora falta pouco, é só pagar o boleto e curtir a plataforma.</p>

          <p>
            Seu acesso será enviado por email assim que seu boleto for aprovado, esse processo pode levar até 24 horas.
          </p>

          <p>Fique de olho nos seus emails.</p>
        </main>
      </Wrapper>
    </Container>
  );
};
