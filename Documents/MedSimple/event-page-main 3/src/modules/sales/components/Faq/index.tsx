import { Wrapper } from "@/components/Wrapper";
import { Container } from "./styles";
import { Questions } from "./Questions";

export function Faq() {
  return (
    <Container id="duvidas">
      <Wrapper>
        <h2>Perguntas comuns</h2>
        
        <Questions />
      </Wrapper>
    </Container>
  );
}
