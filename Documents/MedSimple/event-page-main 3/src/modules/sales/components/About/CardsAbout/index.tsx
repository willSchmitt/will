import { Wrapper } from "@/components/Wrapper";
import { Container, Card } from "./styles";

export function CardsAbout() {
  return (
    <Container>
      <Wrapper>
        <Card>
          <span>01</span>
          <small>Acompanhe o seu desenvolvimento nos estudos</small>
        </Card>
        <Card>
          <span>02</span>
          <small>Crie seus decks ou estude com flashcards da comunidade</small>
        </Card>
        <Card>
          <span>03</span>
          <small>Aprofunde seus estudos com vídeo aulas interativas</small>
        </Card>
      </Wrapper>
    </Container>
  );
}
