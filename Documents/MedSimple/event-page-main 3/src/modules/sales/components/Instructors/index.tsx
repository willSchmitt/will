import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";

import {
  Container,
  InstructorsContainer,
  Instructor,
  Description,
} from "./styles";

export function Instructors() {
  return (
    <Container id="instrutores">
      <Wrapper>
        <aside>
            <span>Equipe</span>
        </aside>

        <main>
          <InstructorsContainer>
            <header>
              <h2>Aprenda com quem já passou pela faculdade de medicina</h2>
              <p>
                O método é baseado no que foi utilizado durante a faculdade de
                medicina pelos seus criadores.
              </p>
            </header>
            
            <Instructor>
              <Image
                src="/images/DrMatheus.png"
                alt="Imagem do médico Matheus"
                width={312}
                height={312}
              />

              <Description>
                <small>Dr. Matheus Fritzen</small>
                <p>
                  Aprovado de primeira na residência médica, incluindo 1º lugar
                  em Radiologia na UNICAMP, 2º no Albert Einstein, além de USP,
                  UNIFESP e Sírio Libanês.
                </p>
              </Description>
            </Instructor>

            <Instructor>
              <Image
                src="/images/DrFabrissio.png"
                alt="Imagem do médico Fabrissio"
                width={312}
                height={312}
              />

              <Description>
                <small>Dr. Fabrissio Portelinha</small>
                <p>
                  Aprovado em 3º lugar em Oftalmologia no ENARE, de primeira,
                  autor de diversas publicações científicas durante a faculdade
                  em nível internacional, incluisive na revista The Lancet.
                </p>
              </Description>
            </Instructor>
          </InstructorsContainer>
        </main>
      </Wrapper>
    </Container>
  );
}
