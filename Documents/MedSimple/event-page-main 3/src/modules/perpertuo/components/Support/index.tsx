import { Wrapper } from "@/components/Wrapper";
import {
  AppMedSimple,
  ButtonApple,
  ButtonGoogle,
  ButtonsDownload,
  SupportSection,
  SupportContainer,
  HeaderSupport,
  Line,
} from "./styles";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Support() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <SupportContainer>
        <Wrapper>
          <SupportSection>
            <HeaderSupport>
              <header>
                <h2>SUPORTE PERSONALIZADO</h2>
                <small>você nunca viu nada parecido</small>
              </header>
              <p>
                O coração da MEDsimple é, literalmente, ouvir o usuário e fazer
                o que ele pede e precisa. Tudo o que é implementado de novo é
                com base no que você nos manda de feedback. E, para isso, temos
                uma equipe extraordinária que responde seus feedbacks todos os
                dias, seja de dúvida sobre qualquer questão ou necessidades de
                estudo que você tenha.
              </p>
              <strong>
                `Ah mas na minha faculdade eu tenho uma matéria que só lá tem.`
              </strong>
              <p>
                Não tem problema! É só você nos enviar o material e referências
                da sua faculdade que elaboramos questionários comentados
                personalizados, flashcards, resumos, macetes e vídeo-aulas.
              </p>
            </HeaderSupport>

            <Image
              src="/images/imagesPerpetuo/supportResponsive.png"
              alt="Suporte medsimple"
              width={308}
              height={514}
            />
          </SupportSection>

          <Line />

          <AppMedSimple>
            <Image
              src="/images/imagesPerpetuo/iphone.png"
              alt="Imagem de um celular iphone"
              width={300}
              height={606}
            />
            <section>
              <header>
                <h2>APP MEDSIMPLE:</h2>
                <small>
                  use no sistema iOS, Android, Tablet, quando quiser e onde
                  quiser.
                </small>
              </header>

              <ButtonsDownload>
                <ButtonApple>
                  <Image
                    src="/images/iconsPerpetuo/apple-logo.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <section>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </section>
                </ButtonApple>

                <ButtonGoogle>
                  <Image
                    src="/images/iconsPerpetuo/google-play.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <section>
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </section>
                </ButtonGoogle>
              </ButtonsDownload>
            </section>
          </AppMedSimple>
        </Wrapper>
      </SupportContainer>
    );
  }

  return (
    <SupportContainer>
      <Wrapper>
        <SupportSection>
          <HeaderSupport>
            <header>
              <h2>SUPORTE PERSONALIZADO</h2>
              <small>você nunca viu nada parecido</small>
            </header>
            <p>
              O coração da MEDsimple é, literalmente, ouvir o usuário e fazer o
              que ele pede e precisa. Tudo o que é implementado de novo é com
              base no que você nos manda de feedback. E, para isso, temos uma
              equipe extraordinária que responde seus feedbacks todos os dias,
              seja de dúvida sobre qualquer questão ou necessidades de estudo
              que você tenha.
            </p>
            <strong>
              `Ah mas na minha faculdade eu tenho uma matéria que só lá tem.`
            </strong>
            <p>
              Não tem problema! É só você nos enviar o material e referências da
              sua faculdade que elaboramos questionários comentados
              personalizados, flashcards, resumos, macetes e vídeo-aulas.
            </p>
          </HeaderSupport>

          <Image
            src="/images/imagesPerpetuo/support.png"
            alt="Suporte medsimple"
            width={682}
            height={845}
          />
        </SupportSection>

        <AppMedSimple>
          <Image
            src="/images/imagesPerpetuo/iphone.png"
            alt="Imagem de um celular iphone"
            width={300}
            height={606}
          />
          <section>
            <header>
              <h2>APP MEDSIMPLE:</h2>
              <small>
                use no sistema iOS, Android, Tablet, quando quiser e onde
                quiser.
              </small>
            </header>

            <ButtonsDownload>
              <ButtonApple>
                <Image
                  src="/images/iconsPerpetuo/apple-logo.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <section>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </section>
              </ButtonApple>

              <ButtonGoogle>
                <Image
                  src="/images/iconsPerpetuo/google-play.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <section>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </section>
              </ButtonGoogle>
            </ButtonsDownload>
          </section>
        </AppMedSimple>
      </Wrapper>
    </SupportContainer>
  );
}
