import Image from "next/image";
import { HeaderSalesModuleContainer } from "./styles";
import { Wrapper } from "@/components/Wrapper";
import { ButtonSalesModule } from "@/components/ButtonSalesModule";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePerpetuo } from "@/modules/perpertuo/contexts/PerpetuoContext";

export function HeaderSalesModule() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { pageData } = usePerpetuo();

  if (isMobile) {
    return (
      <>
        <HeaderSalesModuleContainer>
          <Wrapper>
            <section>
              <Image
                src="/images/logotipo.png"
                alt="Logo medSimple"
                width={150}
                height={42}
              />
              <h1>
                Qualquer estudante de medicina pode fixar o conteúdo e tirar
                notas altas na faculdade.
              </h1>
              <small>
                Garanta mais de 90% de acerto nas questões das provas.
              </small>
            </section>

            <picture>
              <Image
                src="/images/imagesSalesModule/imageHeader.png"
                alt=""
                width={680}
                height={375}
              />
              <ButtonSalesModule />
            </picture>
          </Wrapper>
        </HeaderSalesModuleContainer>
      </>
    );
  }

  return (
    <HeaderSalesModuleContainer>
      <Wrapper>
        <section>
          <Image
            src="/images/logotipo.png"
            alt="Logo medSimple"
            width={150}
            height={42}
          />
          <h1>
            Qualquer estudante de medicina pode fixar o conteúdo e tirar notas
            altas na faculdade.
          </h1>
          <small>Garanta mais de 90% de acerto nas questões das provas.</small>

          <ButtonSalesModule />
        </section>

        <picture>
          <Image
            src="/images/imagesSalesModule/imageHeader.png"
            alt=""
            width={680}
            height={375}
          />
        </picture>
      </Wrapper>
    </HeaderSalesModuleContainer>
  );
}
