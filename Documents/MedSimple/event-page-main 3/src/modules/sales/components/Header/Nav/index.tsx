import { Container } from './styles'

import Image from 'next/image'
import { Wrapper } from '@/components/Wrapper'
import { Button } from '@/components/Button'
import Link from 'next/link'


export function Nav() {
  return (
    <Container>
      <Wrapper>
        <div className="logo">
          <Image src="/images/logotipo.png" alt="" width={143} height={40} />
        </div>

        <nav>
          <Link href="#plataforma" scroll={false}>A plataforma</Link>
          <Link href="#instrutores" scroll={false}>Instrutores</Link>
          <Link href="#vantagens" scroll={false}>Vantagens</Link>
          <Link href="#depoimentos" scroll={false}>Depoimentos</Link>
          <Link href="#duvidas" scroll={false}>Dúvidas</Link>
        </nav>

        <Link href="#planos" scroll={false}>
          <Button>Garantir vaga</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}