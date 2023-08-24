import Image from "next/image"
import { Container } from "./styles"

export const Whatsapp = () => {

  return (
    <Container href="https://wa.me/554898377246" target="_blank">
      <Image src="/images/whatsapp.png" alt="Whats app logo" width={120} height={120} />
      Fale conosco
    </Container>
  )
}