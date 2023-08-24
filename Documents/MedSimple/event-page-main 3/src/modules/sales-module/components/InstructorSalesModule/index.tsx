import { Wrapper } from "@/components/Wrapper";
import {
  ButtonHelp,
  CardsInstructors,
  Help,
  InstructorsSalesModuleContainer,
  LineSalesModule,
  CardInstructors
} from "./styles";
import Image from "next/image";
import { Questions } from "@/modules/perpertuo/components/Questions";

export function InstructorSalesModule() {
  return (
    <InstructorsSalesModuleContainer>
      <Wrapper>
        <header>
          <h2>Aprenda com quem já passou pela faculdade de medicina</h2>
          <p>
            O método MEDsimple é baseado no que foi utilizado durante a
            faculdade de medicina pelos seus criadores, que tornou suas rotinas
            tão eficientes que permitiram a aprovação de primeira nas
            residências médicas que eles quiseram e, também, tempo para
            publicações científicas de alto impacto e atividades
            extracurriculares.
          </p>
        </header>

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
              <span>Dr. Vinícius Tristão</span>
              <p>
                Médico formado pela Universidade Federal de Santa Catarina,
                desenvolveu um tutorial de ensino de Técnica Operatória.
                Apaixonado por criatividade, conseguindo unir arte e medicina.
                PS: E para variar, ainda sobrou tempo para ser campeão de tênis
                de mesa em múltiplos INTERMEDs e competições universitárias.
              </p>
            </section>
          </CardInstructors>
        </CardsInstructors>

        <footer>
          <h2>Perguntas comuns</h2>

          <Questions />

          <LineSalesModule />

          <Help>
            <h3>Posso te ajudar em algo mais específico?</h3>
            <p>
              Se você ainda tem alguma dúvida ou quer mais informações entre em
              contato com a nossa equipe. 
              <strong> Clique no botão abaixo!</strong>
            </p>
            <ButtonHelp>
              <Image
                src="/images/iconsPerpetuo/logoWhats.png"
                alt="logo do aplicativo whatsapp"
                width={24}
                height={24}
              />
              <span>Falar com a equipe!</span>
            </ButtonHelp>
          </Help>
        </footer>
      </Wrapper>
    </InstructorsSalesModuleContainer>
  );
}
