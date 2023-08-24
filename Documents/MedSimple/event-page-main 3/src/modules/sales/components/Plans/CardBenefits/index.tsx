import { Wrapper } from "@/components/Wrapper";
import { ListBenefits } from "./ListBenefits";
import { Container } from "./styles";

export function CardBenefits() {
  return (
    <Container>
      <Wrapper>
        <h2>Além do acesso a plataforma, assinando hoje você ganha de bônus</h2>
        <ListBenefits />
      </Wrapper>
    </Container>
  );
}
