import { CardsAbout } from "./CardsAbout";
import { InfoAbout } from "./InfoAbout";
import { Container } from "./styles";

export function About() {
  return (
    <Container id="plataforma">
      <InfoAbout />
      <CardsAbout />
    </Container>
  )
}