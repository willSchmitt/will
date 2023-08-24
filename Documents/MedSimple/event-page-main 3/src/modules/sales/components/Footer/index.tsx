import { Wrapper } from "@/components/Wrapper";
import { Container, UpTop } from "./styles";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Footer() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <Container>
      <Wrapper>
        <small>
          &copy; 2023 MEDsimple{" "}
          <strong>{!isMobile && "-"} Todos os direitos reservados</strong>
        </small>
        <UpTop onClick={handleScrollTop}>
          <span>Voltar ao topo</span>
          <Image
            src="icons/arrowup.svg"
            alt="seta apontando para cima"
            width={12}
            height={12}
          />
        </UpTop>
      </Wrapper>
    </Container>
  );
}

export default Footer;
