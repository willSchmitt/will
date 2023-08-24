import { Container } from "./styles";

type Props = {
  description: string;
  name: string;
};

export function TestimonialItem({ description, name }: Props) {
  return (
    <Container>
      <blockquote cite={name}>{description}</blockquote>

      <strong>{name}</strong>
      <span>Avaliação na Hotmart</span>
    </Container>
  );
}
