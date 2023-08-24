import { Wrapper } from "@/components/Wrapper";
import {
  CardsInstructors,
  HeaderInstructors,
  InstructorsPerpetuoContainer,
  CardInstructors,
} from "./styles";
import Image from "next/image";

export function InstructorsPerpetuo() {
  return (
    <InstructorsPerpetuoContainer>
      <Wrapper>
        <HeaderInstructors>
          <h2>Aprenda com quem já passou pela faculdade de medicina</h2>
          <small>
            O método MEDsimple é baseado no que foi utilizado durante a
            faculdade de medicina pelos seus criadores, que tornou suas rotinas
            tão eficientes que permitiram a aprovação de primeira nas
            residências médicas que eles quiseram e, também, tempo para
            publicações científicas de alto impacto e atividades
            extracurriculares.
          </small>
        </HeaderInstructors>

        <CardsInstructors>
          <CardInstructors>
            <Image
              src="/images/DrMatheus.png"
              alt="Imagem do Dr. Matheus"
              width={400}
              height={400}
            />
            <section>
              <span>Dr. Matheus Fritzen</span>
              <p>
                Aprovado de primeira na residência médica, incluindo 1º lugar em
                Radiologia na UNICAMP, 2º no Albert Einstein, além de USP,
                UNIFESP e Sírio Libanês. PS: E ainda teve tempo de ser o goleiro
                do time de futebol campeão em todos os INTERMEDS
              </p>
            </section>
          </CardInstructors>

          <CardInstructors>
            <Image
              src="/images/DrFabrissio.png"
              alt="Imagem do Dr. Fabrissio Portelinha"
              width={400}
              height={400}
            />
            <section>
              <span>Dr. Fabrissio Portelinha</span>
              <p>
                `Aprovado em 3º lugar em Oftalmologia no ENARE, de primeira,
                autor de diversas publicações científicas durante a faculdade em
                nível internacional, incluisive na revista The Lancet. Honras em
                Cardiologia no Clerkship na Florida International University.
                Percentil 90 no Step1 do USMLE PS: E ainda sobrou tempo para ser
                campeão no vôlei de quadra e vôlei de areia no INTERMED e
                Universipraia
              </p>
            </section>
          </CardInstructors>

          <CardInstructors>
            <Image
              src="/images/DrVinicius.png"
              alt="Imagem do Dr. Vinícius"
              width={400}
              height={400}
            />
            <section>
              <span>Dr Vinícius Tristão</span>
              <p>
                Médico formado pela Universidade Federal de Santa Catarina,
                desenvolveu um tutorial de ensino de Técnica Operatória.
                Apaixonado por criatividade, conseguindo unir arte e medicina.
                PS: E para variar, ainda sobrou tempo para ser campeão de tênis
                de mesa em múltiplos INTERMEDs e competições universitárias.{" "}
              </p>
            </section>
          </CardInstructors>
        </CardsInstructors>
      </Wrapper>
    </InstructorsPerpetuoContainer>
  );
}
