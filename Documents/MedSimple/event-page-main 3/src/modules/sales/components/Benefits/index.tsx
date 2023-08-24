import { Wrapper } from "@/components/Wrapper";
import { Container, Card, InfoCard} from "./styles";

import Image from "next/image";

export function Benefits() {
  return (
    <Container id="vantagens">
      <Wrapper>
        <h2>
          Vantagens e bônus exclusivos que só a gente tem para você aprimorar
          seus estudos e evoluir
        </h2>
        
        <main>
          <Card>
            <picture>
              <Image
                src="/images/medicalnotes.png"
                alt="Imagem de notas médicas."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Se prepare para a residência desde cedo</strong>
              <small>
                Treine com questões de residência para as provas que deseja
                prestar e obtenha comentários de nossa equipe.
              </small>
            </InfoCard>
          </Card>
          <Card>
            <picture>
              <Image
                src="/images/bookMedical.png"
                alt="Imagem de um livro de medicina."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Aprenda de qualquer lugar e qualquer hora</strong>
              <small>
                Você pode acessar a plataforma de qualquer lugar e a qualquer
                momento, acessando através do site ou do aplicativo para
                celular.
              </small>
            </InfoCard>
          </Card>
          <Card>
            <picture>
              <Image
                src="/images/hands-care-medical.png"
                alt="Imagem de mãos apontando para uma cruz."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Se desenvolva praticando</strong>
              <small>
                Teste o seu conhecimento e a sua velocidade, estudando provas
                personalizadas e aprenda enquanto estuda.
              </small>
            </InfoCard>
          </Card>
          <Card>
            <picture>
              <Image
                src="/images/brain.png"
                alt="Imagem de um cérebro."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Memorização espaçada</strong>
              <small>
                Estude através de flashcards com memorização espaçada para fixar
                ainda mais o conteúdo.
              </small>
            </InfoCard>
          </Card>

          <Card>
            <picture>
              <Image
                src="/images/doctor.png"
                alt="Imagem de um doutor."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Esteja preparado para as provas</strong>
              <small>
                Estude com +1200 planos organizados por temas ou personalize
                seus estudos criando questionários com os temas desejados.
              </small>
            </InfoCard>
          </Card>
          <Card>
            <picture>
              <Image
                src="/images/User.png"
                alt="Imagem de varias pessoas."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Comunidade</strong>
              <small>
                Acesse uma comunidade exclusiva e estude junto com mais de 10
                mil estudantes de medicina como você.
              </small>
            </InfoCard>
          </Card>
          <Card>
            <picture>
              <Image
                src="/images/Business.png"
                alt="Imagem de um gráfico."
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Acompanhe a sua evolução</strong>
              <small>
                Receba uma análise completa do seu desempenho, identificando
                pontos de melhoria e matérias em que você tem se desenvolvido
                mais.
              </small>
            </InfoCard>
          </Card>
          <Card>
            <picture>
              <Image
                src="/images/list-medical.png"
                alt="Imagem de uma lista médica"
                width={48}
                height={48}
              />
            </picture>
            <InfoCard>
              <strong>Resumos dinâmicos</strong>
              <small>
                Tenha acesso a todos os nossos resumos compartilhados no Stories
                do Instagram e de forma totalmente organizada.
              </small>
            </InfoCard>
          </Card>
        </main>
      </Wrapper>
    </Container>
  );
}
