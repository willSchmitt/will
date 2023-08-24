import Image from "next/image";
import { HeaderCaptureContainer } from "./styles";
import { ButtonCapturePage } from "@/components/ButtonCapturePage";
import { Wrapper } from "@/components/Wrapper";

export function HeaderCapture() {
  return (
    <HeaderCaptureContainer>
      <Wrapper>
        <main>
          <Image src="/images/logotipo.png" alt="" width={175} height={50} />
          <h3>Ebook Grátis</h3>

          <section>
            <h1>O passo a passo para acelerar sua aprovação.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </section>

          <ButtonCapturePage />
        </main>

        <picture>
          <Image
            src="/images/bookMedSimple.png"
            alt="Livro da MEDsimple"
            width={410}
            height={500}
          />
        </picture>
      </Wrapper>
    </HeaderCaptureContainer>
  );
}
