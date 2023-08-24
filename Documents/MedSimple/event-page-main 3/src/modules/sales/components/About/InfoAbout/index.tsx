import { Wrapper } from "@/components/Wrapper";
import { Container, Infos, Students } from "./styles";

import Image from "next/image";

export function InfoAbout() {
  return (
    <Container>
      <Wrapper>
        <Infos>
          <h2>
            Plataforma exclusiva e milimetricamente criada para estudantes de
            medicina
          </h2>
          <p>
            Para você do Ciclo Básico, Ciclo Clínico e Internato ou de qualquer
            método de ensino (tradicional, PBL ou misto), seja de faculdade
            pública ou particular.
          </p>

          <Students>
            <Image
              src="/images/students.png"
              alt="Usuários da plataforma Medsimple."
              width={172}
              height={52}
            />
            <small>
              Junte-se a mais de
              <br />
              <b>12.000 alunos e alunas</b>
            </small>
          </Students>
        </Infos>

        <picture>
          <Image
            src="/images/medicine-students.png"
            alt="Estudantes de medicina vestidos de jaleco estudando juntos"
            width={592}
            height={514}
          />
        </picture>
      </Wrapper>
    </Container>
  );
}
