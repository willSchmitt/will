import { Wrapper } from "@/components/Wrapper";
import { ButtonHelp, FaqPerpetuoContainer, Help } from "./styles";
import { Questions } from "../Questions";
import Image from "next/image";
import { Line } from "../Details/styles";

export function FaqPerpetuo() {
  return (
    <FaqPerpetuoContainer>
      <Wrapper>
        <section>
          <h2>Perguntas comuns</h2>
          <Questions />
        </section>

        <Line />

        <Help>
          <h3>Posso te ajudar em algo mais específico?</h3>
          <p>
            Se você ainda tem alguma dúvida ou quer mais informações entre em
            contato com a nossa equipe. <strong>Clique no botão abaixo!</strong>
          </p>
          <ButtonHelp>
            <Image
              src="/images/iconsPerpetuo/logoWhats.png"
              alt="logo do aplicativo whatsapp"
              width={24}
              height={24}
            />
            <span>Falar com a equipe!</span>
          </ButtonHelp>
        </Help>
      </Wrapper>
    </FaqPerpetuoContainer>
  );
}
