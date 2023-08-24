import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FooterCaptureContainer } from "./styles";
import { Wrapper } from "@/components/Wrapper";

export function FooterCapture() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <FooterCaptureContainer>
      <Wrapper>
        <small>
          &copy; 2023 MEDsimple {!isMobile && "-"} Todos os direitos reservados
        </small>
      </Wrapper>
    </FooterCaptureContainer>
  );
}
