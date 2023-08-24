import Image from "next/image";
import { Container } from "./styles";

export function CardAssurance() {
  return (
    <Container>
      <Image
        src="/icons/products.svg"
        alt="Imagem de um escuto com um icone de dinheiro dentro"
        width={56}
        height={56}
      />
      <h2>Garantia incondicional de 15 dias</h2>
      <p>
        Se por qualquer motivo você achar que o curso não é pra você, devolvemos
        seu dinheiro sem taxas, burocracia ou questionamentos.
      </p>
    </Container>
  );
}
