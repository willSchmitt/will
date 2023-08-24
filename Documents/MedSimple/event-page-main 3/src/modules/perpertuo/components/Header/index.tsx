import { Wrapper } from "@/components/Wrapper";
import {
  PerpetuoContainer,
  CardHeaderPerpetuo,
  Methods,
  VideoHeaderPerpetuo,
  ButtonHeaderPerpetuo,
} from "./styles";
import Image from "next/image";
import { ButtonPerpetuo } from "@/components/ButtonPerpetuo";

export function HeaderPerpetuo() {
  return (
    <PerpetuoContainer>
      <Wrapper>
        <section>
          <Image
            src="/images/imagesPerpetuo/logo.png"
            alt=""
            width={140}
            height={40}
          />
          <h1>
            Qualquer estudante de medicina pode fixar o conteúdo e tirar notas
            altas na faculdade.
          </h1>
          <p>
            Entenda porque tantos mediciners estão se preparando desde cedo para
            a residência médica e melhorando as suas notas👇
          </p>
        </section>

        <CardHeaderPerpetuo>
          <h2>
            Assista a aula de introdução gratuitamente e você vai aprender 3
            coisas:
          </h2>

          <ul>
            <Methods>
              <small>01</small>
              <p>O jeito errado de estudar na faculdade de medicina</p>
            </Methods>

            <Methods>
              <small>02</small>
              <p>
                Os 3 pilares que te fazem memorizar a longo prazo os conteúdos
                da faculdade, gastando muito menos tempo
              </p>
            </Methods>

            <Methods>
              <small>03</small>
              <p>
                Como utilizar a tecnologia ao seu favor e antecipar a preparação
                para a prova de residência desde o Ciclo Básico e Clínico
              </p>
            </Methods>
          </ul>
        </CardHeaderPerpetuo>

        <VideoHeaderPerpetuo>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/adEPkN4pcTw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>
            Você não vai ouvir que é `só sentar a bunda na cadeira e estudar` ou
            que `aprender medicina é só para quem é super inteligente`. Assista
            aos primeiros 3 minutos e se nada te convencer você pode voltar a
            tentar ler capítulos de livro de madrugada.
          </p>
        </VideoHeaderPerpetuo>

        <ButtonHeaderPerpetuo>
          <ButtonPerpetuo />
          <Image
            src="/images/imagesPerpetuo/payments.png"
            alt="Imagem com varias formas de pagamento"
            width={450}
            height={23}
          />
        </ButtonHeaderPerpetuo>
      </Wrapper>
    </PerpetuoContainer>
  );
}
