import { Wrapper } from "@/components/Wrapper";
import {
  AllTables,
  Plataform,
  StudentsContainer,
  Table,
  Tables,
  WithMEDsimple,
  WithoutMEDsimple,
} from "./styles";
import Image from "next/image";
import { ButtonPerpetuo } from "@/components/ButtonPerpetuo";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Students() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <StudentsContainer>
        <Wrapper>
          <Plataform>
            <section>
              <h3>
                Plataforma exclusiva e milimetricamente criada para estudantes
                de medicina
              </h3>
              <p>
                Para você do Ciclo Básico, Ciclo Clínico e Internato ou de
                qualquer método de ensino (tradicional, PBL ou misto), seja de
                faculdade pública ou particular.
              </p>
              <Image
                src="/images/imagesPerpetuo/students.png"
                alt="Varias pessoas"
                width={180}
                height={60}
              />
              <strong>
                Junte-se a mais de 20.000 alunos e alunas de TODOS OS ESTADOS DO
                BRASIL e outros países como Argentina, Paraguai, Bolívia e fora
                da América Latina.
              </strong>
            </section>

            <Image
              src="/images/imagesPerpetuo/student.png"
              alt="Aluna sorrindo, mexendo no computador"
              width={608}
              height={540}
            />
          </Plataform>

          <Table>
            <Tables>
              <table>
                <tr>
                  <th>❌ Sem a MEDsimple</th>
                </tr>
                <tr>
                  <td>• 🫠 Não se lembra nem do que estudou ontem</td>
                </tr>
                <tr>
                  <td>• 🥲 kkkrying porque a matéria está acumulada</td>
                </tr>
                <tr>
                  <td>• 🙃 Insegurança e Desorganização</td>
                </tr>
                <tr>
                  <td>
                    • 😶‍🌫️ Você se esconde para não responder nenhuma discussão de
                    caso clínico por falta de conhecimento
                  </td>
                </tr>
                <tr>
                  <td>
                    • 😔 Chega no internato com uma base teórica de medicina
                    fraquíssima. Rendendo menos de 50% na prova de residência.
                  </td>
                </tr>
              </table>

              <table>
                <tr>
                  <th>✅ Com a MEDsimple</th>
                </tr>
                <tr>
                  <td>
                    • 💅 Lembra com confiança em qualquer situação e depois de
                    muito tempo assuntos de semestres anteriores
                  </td>
                </tr>
                <tr>
                  <td>
                    • 💪 Sobra tempo para se exercitar e fazer atividades
                    extracurriculares pois a matéria está em dia e dominada
                  </td>
                </tr>
                <tr>
                  <td>
                    • 💯 Confiança, notas altas, sono em dia e uma rotina
                    produtiva
                  </td>
                </tr>
                <tr>
                  <td>
                    • 🤓 Os seus amigos e os professores olham para você pois
                    sabem que a resposta está na ponta da sua língua
                  </td>
                </tr>
                <tr>
                  <td>
                    • 🤩 Chega no internato confiante, impressionando em todos
                    os estágios em que passa, já batendo os 70%+ na prova de
                    residência
                  </td>
                </tr>
              </table>
            </Tables>
            <ButtonPerpetuo />
          </Table>
        </Wrapper>
      </StudentsContainer>
    );
  }

  return (
    <StudentsContainer>
      <Wrapper>
        <Plataform>
          <section>
            <h3>
              Plataforma exclusiva e milimetricamente criada para estudantes de
              medicina
            </h3>
            <p>
              Para você do Ciclo Básico, Ciclo Clínico e Internato ou de
              qualquer método de ensino (tradicional, PBL ou misto), seja de
              faculdade pública ou particular.
            </p>
            <Image
              src="/images/imagesPerpetuo/students.png"
              alt="Varias pessoas"
              width={180}
              height={60}
            />
            <strong>
              Junte-se a mais de 20.000 alunos e alunas de TODOS OS ESTADOS DO
              BRASIL e outros países como Argentina, Paraguai, Bolívia e fora da
              América Latina.
            </strong>
          </section>

          <Image
            src="/images/imagesPerpetuo/student.png"
            alt="Aluna sorrindo, mexendo no computador"
            width={608}
            height={540}
          />
        </Plataform>

        <Table>
          <table>
            <AllTables>
              <WithMEDsimple>
                <tr>
                  <th>❌ Sem a MEDsimple</th>
                </tr>
                  <tr>
                    <td>• 🫠 Não se lembra nem do que estudou ontem</td>
                  </tr>
                  <tr>
                    <td>• 🥲 kkkrying porque a matéria está acumulada</td>
                  </tr>
                  <tr>
                    <td>• 🙃 Insegurança e Desorganização</td>
                  </tr>
                  <tr>
                    <td>
                      • 😶‍🌫️ Você se esconde para não responder nenhuma discussão
                      de caso clínico por falta de conhecimento
                    </td>
                  </tr>
                  <tr>
                    <td>
                      • 😔 Chega no internato com uma base teórica de medicina
                      fraquíssima. Rendendo menos de 50% na prova de residência.
                    </td>
                  </tr>
              </WithMEDsimple>

              <WithoutMEDsimple>
                <tr>
                  <th>✅ Com a MEDsimple</th>
                </tr>
                <tr>
                  <td>
                    • 💅 Lembra com confiança em qualquer situação e depois de
                    muito tempo assuntos de semestres anteriores
                  </td>
                </tr>
                <tr>
                  <td>
                    • 💪 Sobra tempo para se exercitar e fazer atividades
                    extracurriculares pois a matéria está em dia e dominada
                  </td>
                </tr>
                <tr>
                  <td>
                    • 💯 Confiança, notas altas, sono em dia e uma rotina
                    produtiva
                  </td>
                </tr>
                <tr>
                  <td>
                    • 🤓 Os seus amigos e os professores olham para você pois
                    sabem que a resposta está na ponta da sua língua
                  </td>
                </tr>
                <tr>
                  <td>
                    • 🤩 Chega no internato confiante, impressionando em todos
                    os estágios em que passa, já batendo os 70%+ na prova de
                    residência
                  </td>
                </tr>
              </WithoutMEDsimple>
            </AllTables>
          </table>
          <ButtonPerpetuo />
        </Table>
      </Wrapper>
    </StudentsContainer>
  );
}
